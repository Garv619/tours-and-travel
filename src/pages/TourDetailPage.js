import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './TourDetailPage.css';
import { toursData } from '../data/tours';

function TourDetailPage() {
  const { id } = useParams();
  const tour = toursData.find(t => t.id === Number(id));

  if (!tour) {
    return (
      <div className="error-page">
        <h2>Tour not found</h2>
        <Link to="/tours" className="btn btn-primary">Back to Tours</Link>
      </div>
    );
  }

  return (
    <div className="tour-detail-page">
      <Link to="/tours" className="back-link">← Back to Tours</Link>
      
      <div className="detail-container">
        <div className="detail-image">
          <img src={tour.image} alt={tour.name} />
        </div>

        <div className="detail-header">
          <h1>{tour.name}</h1>
          <div className="detail-meta">
            <span className="location">📍 {tour.location}</span>
            <span className="rating">⭐ {tour.rating}</span>
            <span className="price">${tour.price}</span>
          </div>
        </div>
      </div>

      <div className="detail-content">
        <div className="main-content">
          <section className="description">
            <h2>About This Tour</h2>
            <p>{tour.description}</p>
          </section>

          <section className="highlights">
            <h2>Highlights</h2>
            <ul>
              {tour.highlights.map((highlight, index) => (
                <li key={index}>✓ {highlight}</li>
              ))}
            </ul>
          </section>

          <section className="itinerary">
            <h2>Itinerary</h2>
            <div className="itinerary-list">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="itinerary-item">
                  <div className="day-badge">Day {item.day}</div>
                  <div className="activity">{item.activity}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="included">
            <h2>What's Included</h2>
            <ul>
              {tour.included.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="booking-sidebar">
          <div className="booking-card">
            <h3>Book This Tour</h3>
            <div className="booking-info">
              <div className="info-row">
                <span>Price per person:</span>
                <span className="price">${tour.price}</span>
              </div>
              <div className="info-row">
                <span>Duration:</span>
                <span>{tour.duration} days</span>
              </div>
              <div className="info-row">
                <span>Rating:</span>
                <span>⭐ {tour.rating}</span>
              </div>
            </div>
            <Link to={`/booking/${tour.id}`} className="btn btn-primary btn-block">
              Book Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TourDetailPage;
