import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './BookingPage.css';
import { toursData } from '../data/tours';

function BookingPage({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = toursData.find(t => t.id === Number(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    numberOfPeople: 1,
  });

  const [errors, setErrors] = useState({});

  if (!tour) {
    return (
      <div className="error-page">
        <h2>Tour not found</h2>
        <Link to="/tours" className="btn btn-primary">Back to Tours</Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (formData.numberOfPeople < 1) newErrors.numberOfPeople = 'At least 1 person required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addToCart(tour, formData);
      alert('Tour added to cart successfully!');
      navigate('/cart');
    }
  };

  const totalPrice = tour.price * formData.numberOfPeople;

  return (
    <div className="booking-page">
      <Link to={`/tours/${tour.id}`} className="back-link">← Back to Tour</Link>
      
      <div className="booking-container">
        <div className="booking-form-section">
          <h1>Complete Your Booking</h1>
          <h2>{tour.name}</h2>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={errors.startDate ? 'error' : ''}
                />
                {errors.startDate && <span className="error-msg">{errors.startDate}</span>}
              </div>
              <div className="form-group">
                <label>Number of People *</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  min="1"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className={errors.numberOfPeople ? 'error' : ''}
                />
                {errors.numberOfPeople && <span className="error-msg">{errors.numberOfPeople}</span>}
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              Add to Cart
            </button>
          </form>
        </div>

        <aside className="booking-summary">
          <div className="summary-card">
            <h3>Booking Summary</h3>
            <div className="summary-item">
              <span>Tour:</span>
              <span className="value">{tour.name}</span>
            </div>
            <div className="summary-item">
              <span>Location:</span>
              <span className="value">{tour.location}</span>
            </div>
            <div className="summary-item">
              <span>Duration:</span>
              <span className="value">{tour.duration} days</span>
            </div>
            <div className="summary-item">
              <span>Price per person:</span>
              <span className="value">${tour.price}</span>
            </div>
            <div className="summary-item">
              <span>Number of people:</span>
              <span className="value">{formData.numberOfPeople}</span>
            </div>
            <hr />
            <div className="summary-item total">
              <span>Total Price:</span>
              <span className="value">${totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BookingPage;
