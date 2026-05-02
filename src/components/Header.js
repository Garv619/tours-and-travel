import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">🌍 TravelHub</Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/tours" className="nav-link">Tours</Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 Cart ({cartCount})
          </Link>
        </nav>
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
