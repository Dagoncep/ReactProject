// ProductDetail.js
import { Link } from 'wouter'; 
import React from 'react';

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      {/* Enlace al detalle del producto */}
      <Link to={`/product/${product.id}`}>
        <a>{product.title}</a>
      </Link>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    </div>
  );
}

export default ProductDetail;
