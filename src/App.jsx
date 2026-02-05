import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {

  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Cart state
  const [cart, setCart] = useState([]);
  
  // Toggle dark mode handler
  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  // TODO: Implement state for cart management
  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };
  // TODO: Implement state for category filtering
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div style={{
      background: darkMode ? '#222' : '#fff',
      color: darkMode ? '#fff' : '#000',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      {/* DarkMode Toggle Button */}
      <DarkModeToggle darkMode={darkMode}
      onToggle={handleToggleDarkMode} />
      {/* TODO: Implement category filter dropdown */}
      <label style={{ marginLeft: 16 }}>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      {/* Product List */}
      <ProductList 
      selectedCategory={selectedCategory} onAddToCart={handleAddToCart} cart={cart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
