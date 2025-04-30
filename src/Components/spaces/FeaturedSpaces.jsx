import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockSpaces } from '../../data/mockData';
import './FeaturedSpaces.css';

const FeaturedSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we're using mock data
    const featuredSpaces = mockSpaces.filter(space => space.featured);
    setSpaces(featuredSpaces);
  }, []);

  return (
    <div className="featured-spaces">
      {spaces.map((space) => (
        <Link to={`/spaces/${space.id}`} className="space-card" key={space.id}>
          <div className="space-image-container">
            <img src={space.images[0]} alt={space.name} className="space-image" />
            {space.discount && (
              <div className="space-discount">{space.discount}% OFF</div>
            )}
          </div>
          
          <div className="space-content">
            <div className="space-type">{space.type}</div>
            <h3 className="space-name">{space.name}</h3>
            <p className="space-location">{space.location}</p>
            
            <div className="space-features">
              {space.features.slice(0, 3).map((feature, index) => (
                <span className="space-feature" key={index}>
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="space-footer">
              <div className="space-rating">
                <span className="rating-star">★</span>
                <span className="rating-value">{space.rating}</span>
                <span className="rating-count">({space.reviews} reviews)</span>
              </div>
              <div className="space-price">
                ${space.pricePerHour} <span className="price-period">/ hour</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedSpaces;