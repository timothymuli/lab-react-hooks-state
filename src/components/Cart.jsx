import React from 'react'
import { sampleProducts } from './ProductList'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        {cart.map((id) => {
          const prod = sampleProducts.find(item => item.id === id);
          return (
            <li key={id}>
              {prod ? `${prod.name} 
              is in your cart.` : ''}
            </li>
          );
        })}
        {cart.length === 0 && <li>Cart is empty.</li>}
      </ul>
    </div>
  );
};

export default Cart;
