import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.booking.numberOfPeople), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/tours" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-location">📍 {item.location}</p>
                <div className="booking-details">
                  <p><strong>Traveler:</strong> {item.booking.firstName} {item.booking.lastName}</p>
                  <p><strong>Email:</strong> {item.booking.email}</p>
                  <p><strong>Phone:</strong> {item.booking.phone}</p>
                  <p><strong>Start Date:</strong> {item.booking.startDate}</p>
                  <p><strong>Number of People:</strong> {item.booking.numberOfPeople}</p>
                </div>
              </div>
              <div className="item-pricing">
                <div className="price-info">
                  <p>${item.price} × {item.booking.numberOfPeople} people</p>
                  <p className="subtotal">${(item.price * item.booking.numberOfPeople).toLocaleString()}</p>
                </div>
                <button 
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Taxes & Fees:</span>
              <span>${Math.round(totalPrice * 0.1).toLocaleString()}</span>
            </div>
            <hr />
            <div className="summary-row total">
              <span>Total:</span>
              <span>${Math.round(totalPrice * 1.1).toLocaleString()}</span>
            </div>
            <button className="btn btn-primary btn-block btn-checkout">
              Proceed to Checkout
            </button>
            <Link to="/tours" className="btn btn-secondary btn-block">
              Continue Shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;
