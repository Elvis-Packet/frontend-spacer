import { Link } from 'react-router-dom';
import { useState } from 'react';
import FeaturedSpaces from '../Components/spaces/FeaturedSpaces';
import SpaceCategories from '../Components/spaces/SpaceCategories';
import Testimonials from '../Components/home/Testimonials';
import HowItWorks from '../Components/home/HowitWorks';
import './HomePage.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    window.location.href = `/spaces?q=${searchQuery}&type=${searchType}`;
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Find the perfect space for your needs</h1>
          <p className="hero-subtitle">
            Discover and book unique spaces for meetings, events, or creative projects
          </p>
          
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="What kind of space are you looking for?"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <select 
                className="search-select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="all">All Spaces</option>
                <option value="office">Office Space</option>
                <option value="event">Event Venue</option>
                <option value="studio">Creative Studio</option>
                <option value="meeting">Meeting Room</option>
              </select>
              
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
          </form>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Unique Spaces</span>
            </div>
            <div className="stat">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container section">
        <h2 className="section-title text-center">Popular Space Categories</h2>
        <SpaceCategories />
      </section>
      
      <section className="container section">
        <div className="section-header flex-between">
          <h2 className="section-title">Featured Spaces</h2>
          <Link to="/spaces" className="view-all">View All Spaces</Link>
        </div>
        <FeaturedSpaces />
      </section>
      
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title text-center">How Spacer Works</h2>
          <HowItWorks />
          
          <div className="cta-container">
            <div className="cta-card">
              <h3>Looking for a space?</h3>
              <p>Find and book the perfect venue for your needs</p>
              <Link to="/spaces" className="button button-primary">Find a Space</Link>
            </div>
            
            <div className="cta-card">
              <h3>Have a space to rent?</h3>
              <p>Earn money by listing your space on Spacer</p>
              <Link to="/become-host" className="button button-accent">List Your Space</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">What Our Users Say</h2>
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default HomePage;