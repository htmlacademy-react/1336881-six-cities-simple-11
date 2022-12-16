import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type OffersInitialState = {
  offers: Offer[];
  reviews: Review[];
  currentCity: City;
  isLoading: boolean;
  isOfferLoading: boolean;
  nearOffer: Offer[];
  activeCard: Offer | undefined;
  popularOffers: Offer[];

  citys: City[];
  currentOffer?: Offer;
};

const paris = {
  name: 'Paris',
  lat: 48.87861,
  lng: 2.357499,
  zoom: 16
};


const offersInitialState:OffersInitialState = {
  offers: [],
  reviews: [],
  currentCity: paris,
  isLoading: false,
  nearOffer: [],
  activeCard: undefined,
  popularOffers: [],
  citys: [paris],
  isOfferLoading: false,
};


export const offersProcess = createSlice({
  name: NameSpace.offers,
  initialState: offersInitialState,
  reducers: {
    changeCityAction: (state, action: {type:string; payload: City}) => {
      state.currentCity = action.payload;
      state.offers = state.popularOffers.filter((el) => el.city.name === action.payload.name);
    },
    handleOffersAction: (state, action: {type:string; payload: Offer[]}) => {
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
    },
    isLoadingAction: (state) => {
      state.isLoading = !state.isLoading;
    },
    handleNearOffersAction: (state, action: {type:string; payload: Offer[]}) => {
      state.nearOffer = action.payload;
    },
    handleActiveCardAction: (state, action: {type:string; payload: Offer}) => {
      state.activeCard = action.payload;
    },
    handleSortPriceUpAction: (state) => {
      state.offers.sort((a, b) => a.price - b.price);
    },
    handleSortPriceDownAction: (state) => {
      state.offers.sort((b, a) => a.price - b.price);
    },
    handleSortRatingAction: (state) => {
      state.offers.sort((b, a) => a.rating - b.rating);
    },
    handleSortPopularAction: (state) => {
      state.offers = state.popularOffers.filter((el) => el.city.name === state.currentCity.name);
    },
    handleOfferAction: (state, action: {type:string; payload: Offer}) => {
      state.currentOffer = action.payload;
    },
    setIsOfferLoading: (state, action: {type:string}) => {
      state.isOfferLoading = !state.isOfferLoading;
    },
  }
});

export const {
  changeCityAction,
  handleOffersAction,
  isLoadingAction,
  handleNearOffersAction,
  handleActiveCardAction,
  handleSortPriceUpAction,
  handleSortPriceDownAction,
  handleSortRatingAction,
  handleSortPopularAction,
  handleOfferAction,
  setIsOfferLoading
} = offersProcess.actions;
