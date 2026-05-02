import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import TourCard from '../components/TourCard';
import { toursData } from '../data/tours';

function HomePage() {
  const featuredTours = toursData.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore amazing destinations and create unforgettable memories</p>
          <Link to="/tours" className="btn btn-primary btn-large">
            Explore Tours
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Tours</h2>
        <div className="tours-grid">
          {featuredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose TravelHub?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">✈️</div>
            <h3>Expert Planning</h3>
            <p>Our experienced travel experts curate the best tours for you</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Get the best deals and discounts on all our tour packages</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Safe & Secure</h3>
            <p>Your safety and satisfaction are our top priorities</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌍</div>
            <h3>Worldwide Coverage</h3>
            <p>Explore destinations across all continents with ease</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
