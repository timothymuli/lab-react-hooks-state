import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
];

const ProductList = ({ selectedCategory, onAddToCart, cart }) => {
  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);
    
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} 
         onAddToCart={onAddToCart} 
      inCart={cart.includes(product.id)} />
      ))}
    </div>
  );
};

export default ProductList;
