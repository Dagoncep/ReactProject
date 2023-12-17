// Product.js
function Product({ product }) {
  return (
    <div key={product.id} className="product">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2><a href={`/product/${product.id}`}>{product.title}</a></h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
}
export default Product;