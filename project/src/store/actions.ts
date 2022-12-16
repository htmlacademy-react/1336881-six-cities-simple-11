import {createAsyncThunk } from '@reduxjs/toolkit';
import { TDispath } from '../types';
import { State } from '../types';
import {AxiosInstance} from 'axios';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { User } from '../types/user';
import { Comment } from '../types/comment';
import { ApiRoute } from '../const';
import { handleLoginAction, handleUserDataAction } from './user-process/user-process';
import { handleGetCommentsAction, handleAddCommentsAction } from './comment-process/comment-process';
import { isLoadingAction, handleOffersAction, handleNearOffersAction, setIsOfferLoading, handleOfferAction } from './offers-process/offers-process';


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
  const {data} = await api.get<Offer[]>(`${ApiRoute.Hotels}/${id}/nearby`);
  dispatch(handleNearOffersAction(data));
});

export const checkAuthAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  try {
    const {data} = await api.get<User>(ApiRoute.Login);
    dispatch(handleLoginAction({status: AuthorizationStatus.Auth, data}));
  } catch (error) {
    dispatch(handleLoginAction({status: AuthorizationStatus.NoAuth}));
  }
});

export const loginAction = createAsyncThunk<void, User, Tthunk>('user/checkAuthAction', async ({email, password},{dispatch, extra: api}) => {
  const {data} = await api.post<User>(ApiRoute.Login, {email, password});
  dispatch(handleUserDataAction(data));
  saveToken(data.token || '');
  dispatch(handleLoginAction({status: AuthorizationStatus.Auth}));
});

export const logoutAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  await api.delete(ApiRoute.Login);
  dispatch(handleUserDataAction(null));
  dropToken();
  dispatch(handleLoginAction({status: AuthorizationStatus.NoAuth}));
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


export const getOfferAction = createAsyncThunk<void, string, Tthunk>('offer/getOfferAction', async (id,{dispatch, extra: api}) => {
  dispatch(setIsOfferLoading());
  const {data} = await api.get<Offer>(`${ApiRoute.Hotels}/${id}`);
  dispatch(handleOfferAction(data));
  dispatch(setIsOfferLoading());
});

