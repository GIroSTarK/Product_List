import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { loadAllProducts } from './features/products';
import { Link } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();
  const { items: products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
