import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

type ProductsState = {
  isLoading: boolean;
  isError: boolean;
  items: Product[];
};

const initialState: ProductsState = {
  isLoading: false,
  isError: false,
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
});

export default productsSlice.reducer;
