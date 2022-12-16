import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { commentProcess } from './comment-process/comment-process';
import { offersProcess } from './offers-process/offers-process';
import { userProcess } from './user-process/user-process';

export const mainReducer = combineReducers({
  [NameSpace.comment]: commentProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.offers]: offersProcess.reducer,
});


