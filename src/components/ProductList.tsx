import { useEffect, useState } from 'react';
import { loadAllProducts } from '../features/products';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AddProduct } from './AddProduct';
import { Loader } from './Loader';
import { ProductItem } from './ProductItem';

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    isError,
    items: products,
  } = useAppSelector((state) => state.products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(loadAllProducts());
  }, [dispatch]);

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-6xl font-bold text-center mb-10">Product List</h2>
        <button
          className="mb-6 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
        {!isLoading && !isError && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductItem product={product} />
            ))}
          </ul>
        )}

        {isLoading && <Loader />}
      </div>

      {isModalOpen && <AddProduct onAdd={setIsModalOpen} />}
    </div>
  );
};
