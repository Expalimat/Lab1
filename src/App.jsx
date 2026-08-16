import { products } from './data/products';
import ProductList from './components/ProductList';

export default function App() {
  return <ProductList products={products} />;
}
