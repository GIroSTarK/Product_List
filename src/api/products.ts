import { Product } from '../types/Product';
import { client } from '../utils/sendRequest';

export const getAllProducts = () => {
  return client.get<Product[]>('/products');
};
