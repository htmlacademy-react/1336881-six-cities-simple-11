

import { Offer } from '../types/offer';
const IMG_URL = 'https://i.pravatar.cc/256';

export const offerCards: Offer[] = [
  {
    id: 1,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: true,
    price: 10,
    title: 'Beautiful & luxurious apartment at great location 1',
    type: 'apartment',
    rating: 1,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 2,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: false,
    price: 20,
    title: 'Beautiful & luxurious apartment at great location 2',
    type: 'room',
    rating: 2,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
  },
  {
    id: 3,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: true,
    price: 30,
    title: 'Beautiful & luxurious apartment at great location 3',
    type: 'house',
    rating: 3,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
  },
  {
    id: 4,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: false,
    price: 40,
    title: 'Beautiful & luxurious apartment at great location 4',
    type: 'hotel',
    rating: 4,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
  }
];
