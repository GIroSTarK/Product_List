import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { createProduct, getAllProducts, removeProduct } from '../api/products';

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

export const addProduct = createAsyncThunk(
  'products/add',
  (data: { name: string; imageUrl: string }) => createProduct(data)
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  (productId: number) => removeProduct(productId)
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    delete: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
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
    builder.addCase(addProduct.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
});

export default productsSlice.reducer;
