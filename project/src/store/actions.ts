import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const changeCityAction = createAction('city/changeCityAction', (value:City) => ({
  payload: value,
}));


export const getOffersAction = createAction('offer/getOffersAction');
