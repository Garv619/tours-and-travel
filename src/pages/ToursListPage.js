import React, { useState, useMemo } from 'react';
import './ToursListPage.css';
import TourCard from '../components/TourCard';
import { toursData } from '../data/tours';

function ToursListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState(2000);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [durationFilter, setDurationFilter] = useState(30);

  const filteredTours = useMemo(() => {
    return toursData.filter(tour => {
      const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = tour.price <= priceFilter;
      const matchesRating = tour.rating >= ratingFilter;
      const matchesDuration = tour.duration <= durationFilter;

      return matchesSearch && matchesPrice && matchesRating && matchesDuration;
    });
  }, [searchTerm, priceFilter, ratingFilter, durationFilter]);

  return (
    <div className="tours-list-page">
      <h1>Explore All Tours</h1>
      
      <div className="tours-container">
        <aside className="filters">
          <h3>Filters</h3>
          
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Price: ${priceFilter}</label>
            <input
              type="range"
              min="500"
              max="2000"
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
              className="range-input"
            />
          </div>

          <div className="filter-group">
            <label>Rating: {ratingFilter}</label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
              className="range-input"
            />
          </div>

          <div className="filter-group">
            <label>Duration: {durationFilter} days</label>
            <input
              type="range"
              min="1"
              max="30"
              value={durationFilter}
              onChange={(e) => setDurationFilter(Number(e.target.value))}
              className="range-input"
            />
          </div>
        </aside>

        <main className="tours-main">
          <div className="results-info">
            <p>Found {filteredTours.length} tour(s)</p>
          </div>
          
          {filteredTours.length > 0 ? (
            <div className="tours-grid">
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No tours found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ToursListPage;
