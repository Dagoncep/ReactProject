import React from 'react';
import { Route, Switch, Router } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage'; // Nuevo componente
import ContactPage from './components/ContactPage'; // Nuevo componente
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductDetailPage} /> {/* Ruta para detalles del producto */}
          <Route path="/contact" component={ContactPage} /> {/* Ruta de contacto */}
          <Route path="/:rest*" component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
