import { createSlice } from '@reduxjs/toolkit';
import { Comment } from '../types/Comment';

type CommentsState = {
  isLoading: boolean;
  isError: boolean;
  items: Comment[];
};

const initialState: CommentsState = {
  isLoading: false,
  isError: false,
  items: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {},
});

export default commentsSlice.reducer;
