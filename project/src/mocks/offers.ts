

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
  },
  {
    id: 2,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: false,
    price: 20,
    title: 'Beautiful & luxurious apartment at great location 2',
    type: 'room',
    rating: 2,
  },
  {
    id: 3,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: true,
    price: 30,
    title: 'Beautiful & luxurious apartment at great location 3',
    type: 'house',
    rating: 3,
  },
  {
    id: 4,
    picture: `${IMG_URL}?rnd=${Math.random()}`,
    premium: false,
    price: 40,
    title: 'Beautiful & luxurious apartment at great location 4',
    type: 'hotel',
    rating: 4,
  }
];
