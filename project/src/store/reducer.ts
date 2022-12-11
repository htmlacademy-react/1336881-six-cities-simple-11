import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/auth';
import { City } from '../types/city';
import { Comment } from '../types/comment';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { User } from '../types/user';
import { changeCityAction,
  handleOffersAction,
  isLoadingAction,
  handleNearOffersAction,
  handleActiveCardAction,
  handleSortPriceDownAction,
  handleSortPriceUpAction,
  handleSortRatingAction,
  handleSortPopularAction,
  handleLoginAction,
  handleUserDataAction,
  handleGetCommentsAction,
  handleAddCommentsAction,
} from './actions';

type InitialState = {
  offers: Offer[];
  reviews: Review[];
  currentCity: City;
  isLoading: boolean;
  nearOffer: Offer[];
  activeCard: Offer | undefined;
  popularOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  comments: Comment[];
  citys: City[];
};

const paris = {
  name: 'Paris',
  lat: 48.87861,
  lng: 2.357499,
  zoom: 16
};

const initialState: InitialState = {
  offers: [],
  reviews: [],
  currentCity: paris,
  isLoading: false,
  nearOffer: [],
  activeCard: undefined,
  popularOffers: [],
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
  comments: [],
  citys: [paris],
};

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.currentCity = action.payload;
      state.offers = state.popularOffers.filter((el) => el.city.name === action.payload.name);
    })
    .addCase(handleOffersAction, (state, action) => {
      state.offers = action.payload.filter((el) => el.city.name === state.currentCity.name);
      state.popularOffers = action.payload;
      const unicCitys:City[] = [];

      action.payload.forEach((el) => {
        if(unicCitys.find((city) => city.name === el.city.name)){
          return;
        }
        unicCitys.push({
          name: el.city.name,
          lat: el.city.location.latitude,
          lng: el.city.location.longitude,
          zoom: 10,
        });
      });
      state.citys = unicCitys.reverse();
    })
    .addCase(isLoadingAction, (state) => {
      state.isLoading = !state.isLoading;
    })
    .addCase(handleNearOffersAction, (state, action) => {
      state.nearOffer = action.payload;
    })
    .addCase(handleActiveCardAction, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(handleSortPriceUpAction, (state) => {
      state.offers.sort((a, b) => a.price - b.price);
    })
    .addCase(handleSortPriceDownAction, (state) => {
      state.offers.sort((b, a) => a.price - b.price);
    })
    .addCase(handleSortRatingAction, (state) => {
      state.offers.sort((b, a) => a.rating - b.rating);
    })
    .addCase(handleSortPopularAction, (state) => {
      state.offers = state.popularOffers.filter((el) => el.city.name === state.currentCity.name);
    })
    .addCase(handleLoginAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(handleUserDataAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(handleGetCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(handleAddCommentsAction, (state, action) => {
      state.comments = action.payload;
    });
});
