import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

type Props = {
  product: Product;
};

export const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <li
      key={product.id}
      className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-52 object-cover rounded-lg mb-6"
      />
      <Link
        to={`/product/${product.id}`}
        className="text-xl font-semibold text-blue-600 hover:underline"
      >
        {product.name}
      </Link>
      <button className="mt-6 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors">
        Delete
      </button>
    </li>
  );
};
