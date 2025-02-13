import { Product } from '../types/Product';
import { client } from '../utils/sendRequest';

export const getAllProducts = () => {
  return client.get<Product[]>('/products');
};

export const createProduct = (data: { name: string; imageUrl: string }) => {
  return client.post<Product>('/products', data);
};
