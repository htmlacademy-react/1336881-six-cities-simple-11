import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { TDispath } from '../types';
import { State } from '../types';
import {AxiosInstance} from 'axios';

export const changeCityAction = createAction('city/changeCityAction', (value:City) => ({
  payload: value,
}));

type Tthunk = {
  dispatch: TDispath;
  state: State;
  api: AxiosInstance;
};


export const getOffersAction = createAsyncThunk<void, void, Tthunk>('offer/getOffersAction', async (_,{dispatch, state, api}) => {
  console.log(1)
  await api.get('/hotels');
});
