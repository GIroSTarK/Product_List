import { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addProduct } from '../features/products';

type Props = {
  onAdd: (_: boolean) => void;
};

export const AddProduct: React.FC<Props> = ({ onAdd }) => {
  const dispatch = useAppDispatch();
  const [newProduct, setNewProduct] = useState({ name: '', imageUrl: '' });

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    onAdd(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full mb-4"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border p-2 w-full mb-4"
          value={newProduct.imageUrl}
          onChange={(e) =>
            setNewProduct({ ...newProduct, imageUrl: e.target.value })
          }
        />
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 py-2 px-4 rounded cursor-pointer"
            onClick={() => onAdd(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
            onClick={handleAddProduct}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
