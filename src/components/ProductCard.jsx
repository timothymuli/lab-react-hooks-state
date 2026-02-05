import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onAddToCart, inCart }) => {
  return (
    <div className={`${styles.card} ${!product.instock ? styles.outofstock : ''}`}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.instock ? 'In Stock' : 'Out of Stock'}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      {inCart ? (
        <p>{product.name} is in your cart.</p>
      ) : (
        <button className={styles.cartBtn} data-testid={'product-' + product.id} onClick={() =>
          onAddToCart(product.id)} disabled={!product.instock}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
