import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToursListPage from './pages/ToursListPage';
import TourDetailPage from './pages/TourDetailPage';
import BookingPage from './pages/BookingPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (tour, booking) => {
    setCart([...cart, { ...tour, booking, id: Date.now() }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tours" element={<ToursListPage />} />
            <Route path="/tours/:id" element={<TourDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
