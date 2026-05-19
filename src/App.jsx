import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div style={{
      background: darkMode ? '#222' : '#fff',
      color: darkMode ? '#fff' : '#000',
      minHeight: '100vh',
      padding: '20px',
    }}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />

      <label style={{ marginLeft: 16 }}>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
        cart={cart}
      />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
