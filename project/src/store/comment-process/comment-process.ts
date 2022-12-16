import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Comment } from '../../types/comment';

type CommentInitialState = {
  comments: Comment[];
};

const commentInitialState:CommentInitialState = {
  comments: [],
};


export const commentProcess = createSlice({
  name: NameSpace.comment,
  initialState: commentInitialState,
  reducers: {

    handleGetCommentsAction:(state, action: {type:string; payload: Comment[]}) => {
      state.comments = action.payload;
    },
    handleAddCommentsAction:(state, action: {type:string; payload: Comment[]}) => {
      state.comments = action.payload;
    }
  }
});

export const {handleGetCommentsAction, handleAddCommentsAction} = commentProcess.actions;
