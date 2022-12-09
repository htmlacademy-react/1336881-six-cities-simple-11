import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { TDispath } from '../types';
import { State } from '../types';
import {AxiosInstance} from 'axios';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { User } from '../types/user';

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


type Tthunk = {
  dispatch: TDispath;
  state: State;
  extra: AxiosInstance;
};


export const getOffersAction = createAsyncThunk<void, void, Tthunk>('offer/getOffersAction', async (_,{dispatch, extra: api}) => {
  dispatch(isLoadingAction());
  const {data} = await api.get<Offer[]>('/hotels');
  dispatch(handleOffersAction(data));
  dispatch(isLoadingAction());
});

export const getNearOffersAction = createAsyncThunk<void, string, Tthunk>('offer/getNearOffersAction', async (id,{dispatch, extra: api}) => {
  dispatch(isLoadingAction());
  const {data} = await api.get<Offer[]>(`/hotels/${id}/nearby`);
  dispatch(handleNearOffersAction(data));
  dispatch(isLoadingAction());
});

export const checkAuthAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  try {
    await api.get('/login');
    dispatch(handleLoginAction(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(handleLoginAction(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, User, Tthunk>('user/checkAuthAction', async ({email, password},{dispatch, extra: api}) => {
  const {data} = await api.post<User>('/login', {email, password});
  dispatch(handleUserDataAction(data));
  saveToken(data.token);
  dispatch(handleLoginAction(AuthorizationStatus.Auth));
});

export const logoutAction = createAsyncThunk<void, undefined, Tthunk>('user/checkAuthAction', async (_,{dispatch, extra: api}) => {
  await api.delete('/login');
  dispatch(handleUserDataAction(null));
  dropToken();
  dispatch(handleLoginAction(AuthorizationStatus.NoAuth));
});

