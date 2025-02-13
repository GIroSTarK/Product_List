import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { getAllProducts } from '../api/products';

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

export const loadAllProducts = createAsyncThunk(
  'products/fetch',
  getAllProducts
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadAllProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(loadAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
  },
});

export default productsSlice.reducer;
