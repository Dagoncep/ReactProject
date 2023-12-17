// ProductList.js
import Product from './Product';

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
}
export default ProductList;