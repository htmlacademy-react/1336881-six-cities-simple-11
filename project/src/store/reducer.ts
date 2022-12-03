import { createReducer } from '@reduxjs/toolkit';
import { CITY } from '../mocks/city';
import { reviewItems } from '../mocks/reviews';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { changeCityAction, handleOffersAction, isLoadingAction} from './actions';

type InitialState = {
  offers: Offer[];
  reviews: Review[];
  currentCity: City;
  isLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  reviews: reviewItems,
  currentCity: CITY,
  isLoading: false,
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(handleOffersAction, (state, action) => {
      state.offers = action.payload.filter((el) => el.city.name === state.currentCity.name);
    })
    .addCase(isLoadingAction, (state) => {
      state.isLoading = !state.isLoading;
    });
});
