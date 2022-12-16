import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AuthorizationStatus } from '../../types/auth';
import { User } from '../../types/user';

type UserInitialState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

const userInitialState:UserInitialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
};


export const userProcess = createSlice({
  name: NameSpace.user,
  initialState: userInitialState,
  reducers: {
    handleLoginAction: (state, action:{type:string; payload: {status: AuthorizationStatus; data?: User}}) => {
      state.authorizationStatus = action.payload.status;
      if(action.payload.data){
        state.user = action.payload.data;
      }
    },
    handleUserDataAction: (state, action: {type:string; payload: User | null}) => {
      state.user = action.payload;
    }
  }
});


export const {handleLoginAction, handleUserDataAction} = userProcess.actions;

