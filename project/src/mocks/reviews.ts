import { Review } from '../types/review';
const IMG_URL = 'https://i.pravatar.cc/128';

export const reviewItems: Review[] = [
  {
    id: 1,
    avatar: `${IMG_URL}?rnd=${Math.random()}`,
    grade: 1,
    date: 'April 2019',
    text: 'lorem1',
  },
  {
    id: 2,
    avatar: `${IMG_URL}?rnd=${Math.random()}`,
    grade: 1,
    date: 'April 2020',
    text: 'lorem2',
  },
  {
    id: 3,
    avatar: `${IMG_URL}?rnd=${Math.random()}`,
    grade: 1,
    date: 'April 2021',
    text: 'lorem3',
  },
  {
    id: 4,
    avatar: `${IMG_URL}?rnd=${Math.random()}`,
    grade: 1,
    date: 'April 2022',
    text: 'lorem4',
  },
];
