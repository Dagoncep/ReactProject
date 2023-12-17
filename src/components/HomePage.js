// HomePage.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import Loading from './Loading';
import { Link } from 'wouter';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar los productos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Filtrar productos
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  if (loading) return <Loading />;
  if (error) return <p>Error loading products: {error.message}</p>;

  // Obtener categorías únicas para el filtro
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter categories={categories} onSelectCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
      <div>
      {/* Resto del contenido de HomePage */}
      <Link to="/contact">
        <button className="contact-button">Contact Us</button>
      </Link>
      {/* Más contenido si es necesario */}
    </div>
    </div>
  );
}

export default HomePage;
