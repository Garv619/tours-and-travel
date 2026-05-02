import React from 'react';
import { Link } from 'react-router-dom';
import './TourCard.css';

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      <div className="tour-image">
        <img src={tour.image} alt={tour.name} />
        <span className="tour-rating">⭐ {tour.rating}</span>
      </div>
      <div className="tour-content">
        <h3>{tour.name}</h3>
        <p className="tour-location">📍 {tour.location}</p>
        <p className="tour-description">{tour.description}</p>
        <div className="tour-info">
          <span className="tour-duration">📅 {tour.duration} days</span>
          <span className="tour-price">${tour.price}</span>
        </div>
        <Link to={`/tours/${tour.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
