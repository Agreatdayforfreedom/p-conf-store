import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((p) => (
          <Product key={p.id} product={p} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};
