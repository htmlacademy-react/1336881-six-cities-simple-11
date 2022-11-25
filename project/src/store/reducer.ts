import { createReducer } from '@reduxjs/toolkit';
import { CITY } from '../mocks/city';
import { offerCards } from '../mocks/offers';
import { reviewItems } from '../mocks/reviews';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { changeCityAction, getOffersAction } from './actions';

type InitialState = {
  offers: Offer[];
  reviews: Review[];
  currentCity: City;
};

const initialState: InitialState = {
  offers: [],
  reviews: reviewItems,
  currentCity: CITY,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffersAction, (state) => {
      state.offers = offerCards;
    });
});
