import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products';
import commentsReducer from '../features/comments';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
  },
});
