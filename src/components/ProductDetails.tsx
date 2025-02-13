import { useParams } from 'react-router-dom';
import { Product } from '../types/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '../api/products';
import { Loader } from './Loader';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    const getProductData = async () => {
      const prod = await getProduct(+id);
      setProduct(prod);
    };

    getProductData();
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">In stock: {product.count}</p>
      <p className="mt-2">
        Size: {product.size.width} x {product.size.height} cm
      </p>
      <p className="mt-2">Weight: {product.weight}</p>
      <h3 className="text-lg font-semibold mt-4">Comments:</h3>
      <ul className="mt-2 space-y-2">
        {product.comments.length > 0 ? (
          product.comments.map((comment) => (
            <li key={comment.id} className="p-3 border rounded-md bg-gray-100">
              <p className="text-sm text-gray-800">{comment.description}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No comments yet</p>
        )}
      </ul>
    </div>
  );
};
