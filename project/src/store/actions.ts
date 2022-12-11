import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { TDispath } from '../types';
import { State } from '../types';
import {AxiosInstance} from 'axios';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { User } from '../types/user';
import { Comment } from '../types/comment';
import { ApiRoute } from '../const';

export const isLoadingAction = createAction('loading/isLoadingAction');

export const changeCityAction = createAction('city/changeCityAction', (value:City) => ({
  payload: value,
}));

export const handleOffersAction = createAction('offer/handleOffersAction', (value:Offer[]) => ({
  payload: value,
}));

export const handleNearOffersAction = createAction('offer/handleNearOffersAction', (value:Offer[]) => ({
  payload: value,
}));

export const handleActiveCardAction = createAction('offer/handleActiveCardAction', (value:Offer) => ({
  payload: value,
}));

export const handleSortPriceUpAction = createAction('offer/handleSortPriceUpAction');

export const handleSortPriceDownAction = createAction('offer/handleSortPriceDownAction');

export const handleSortRatingAction = createAction('offer/handleSortRatingAction');

export const handleSortPopularAction = createAction('offer/handleSortPopularAction');

export const handleLoginAction = createAction('user/handleSortPopularAction', (value:AuthorizationStatus) => ({payload:value}));

export const handleUserDataAction = createAction('user/handleUserDataAction', (value: User | null) => ({payload:value}));

export const handleGetCommentsAction = createAction('comments/handleGetCommentsAction', (value: Comment[]) => ({payload:value}));

export const handleAddCommentsAction = createAction('comments/handleAddCommentsAction', (value: Comment[]) => ({payload:value}));


type Tthunk = {
  dispatch: TDispath;
  state: State;
  extra: AxiosInstance;
};


export const getOffersAction = createAsyncThunk<void, void, Tthunk>('offer/getOffersAction', async (_,{dispatch, extra: api}) => {
  dispatch(isLoadingAction());
  const {data} = await api.get<Offer[]>(ApiRoute.Hotels);
  dispatch(handleOffersAction(data));
  dispatch(isLoadingAction());
});

export const getNearOffersAction = createAsyncThunk<void, string, Tthunk>('offer/getNearOffersAction', async (id,{dispatch, extra: api}) => {
  dispatch(isLoadingAction());
  const {data} = await api.get<Offer[]>(`${ApiRoute.Hotels}/${id}/nearby`);
  dispatch(handleNearOffersAction(data));
  dispatch(isLoadingAction());
});

export const checkAuthAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  try {
    await api.get(ApiRoute.Login);
    dispatch(handleLoginAction(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(handleLoginAction(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, User, Tthunk>('user/checkAuthAction', async ({email, password},{dispatch, extra: api}) => {
  const {data} = await api.post<User>(ApiRoute.Login, {email, password});
  dispatch(handleUserDataAction(data));
  saveToken(data.token || '');
  dispatch(handleLoginAction(AuthorizationStatus.Auth));
});

export const logoutAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  await api.delete(ApiRoute.Login);
  dispatch(handleUserDataAction(null));
  dropToken();
  dispatch(handleLoginAction(AuthorizationStatus.NoAuth));
});


export const getCommentsAction = createAsyncThunk<void, string, Tthunk>('comments/getCommentsAction', async (id,{dispatch, extra: api}) => {
  const {data} = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);
  dispatch(handleGetCommentsAction(data));
});


export const addCommentsAction = createAsyncThunk<
  void,
  {id:string; comment:string; rating:number},
  Tthunk>('comments/addCommentsAction',
    async ({id, comment, rating},{dispatch, extra: api}) => {
      const {data} = await api.post<Comment[]>(`${ApiRoute.Comments}/${id}`, {comment, rating});
      dispatch(handleAddCommentsAction(data));
    });

