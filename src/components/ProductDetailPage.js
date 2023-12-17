// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import Loading from './Loading';


function ProductDetailPage() {
  const [match, params] = useRoute("/product/:id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (match) {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [match, params.id]);

  if (loading) return <Loading />;
  if (error) return <p>Error loading product: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Otros detalles del producto */}
    </div>
  );
}

export default ProductDetailPage;
