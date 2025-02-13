import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './app/store.ts';
import { ProductList } from './components/ProductList.tsx';
import { ProductDetails } from './components/ProductDetails.tsx';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
