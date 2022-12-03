import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { TDispath } from '../types';
import { State } from '../types';
import {AxiosInstance} from 'axios';
import { Offer } from '../types/offer';

export const isLoadingAction = createAction('loading/isLoadingAction');

export const changeCityAction = createAction('city/changeCityAction', (value:City) => ({
  payload: value,
}));

export const handleOffersAction = createAction('offer/handleOffersAction', (value:Offer[]) => ({
  payload: value,
}));


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
