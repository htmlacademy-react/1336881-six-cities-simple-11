import { store } from '../store';

export type State = ReturnType<typeof store.getState>;
export type TDispath = typeof store.dispatch;

