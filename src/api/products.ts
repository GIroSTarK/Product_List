import { Product } from '../types/Product';
import { client } from '../utils/sendRequest';

export const getAllProducts = () => {
  return client.get<Product[]>('/products');
};

export const getProduct = (productId: number) => {
  return client.get<Product>(`/products/${productId}`);
};

export const createProduct = (data: { name: string; imageUrl: string }) => {
  return client.post<Product>('/products', data);
};

export const removeProduct = (productId: number) => {
  return client.delete(`/products/${productId}`);
};
