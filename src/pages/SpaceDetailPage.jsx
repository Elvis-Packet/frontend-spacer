import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { mockSpaces } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import './SpaceDetailPage.css';

const SpaceDetailPage = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [bookingDate, setBookingDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [hours, setHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchSpace = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundSpace = mockSpaces.find(s => s.id === parseInt(id));
        if (foundSpace) {
          setSpace(foundSpace);
        }
      } catch (error) {
        console.error('Error fetching space:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpace();
  }, [id]);

  useEffect(() => {
    if (startTime && endTime) {
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);
      
      if (end > start) {
        const diffInHours = (end - start) / (1000 * 60 * 60);
        setHours(diffInHours);
        setTotalPrice(space.pricePerHour * diffInHours);
      } else {
        setHours(0);
        setTotalPrice(0);
      }
    }
  }, [startTime, endTime, space]);

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    
    // In a real app, this would be an API call to create a booking
    // For now, we'll just show a success message
    setBookingSubmitted(true);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading space details...</p>
      </div>
    );
  }

  if (!space) {
    return (
      <div className="container not-found">
        <h2>Space Not Found</h2>
        <p>The space you're looking for doesn't exist or has been removed.</p>
        <Link to="/spaces" className="button button-primary">Browse Other Spaces</Link>
      </div>
    );
  }

  return (
    <div className="space-detail-page">
      <div className="container">
        <div className="space-gallery">
          <div className="main-image-container">
            <img src={space.images[activeImage]} alt={space.name} className="main-image" />
          </div>
          <div className="thumbnail-container">
            {space.images.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${space.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-content-container">
          <div className="space-main-content">
            <div className="space-header">
              <div>
                <div className="space-type">{space.type}</div>
                <h1 className="space-title">{space.name}</h1>
                <p className="space-location">{space.location}</p>
              </div>
              <div className="space-info-badges">
                <div className="info-badge">
                  <span className="badge-label">Capacity</span>
                  <span className="badge-value">{space.capacity} people</span>
                </div>
                <div className="info-badge">
                  <span className="badge-label">Area</span>
                  <span className="badge-value">{space.area} sq ft</span>
                </div>
              </div>
            </div>
            
            <div className="space-rating-container">
              <div className="space-rating">
                <span className="rating-star">★</span>
                <span className="rating-value">{space.rating}</span>
                <span className="rating-count">({space.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="space-section">
              <h2>About this space</h2>
              <p>{space.description}</p>
            </div>
            
            <div className="space-section">
              <h2>Amenities</h2>
              <div className="amenities-grid">
                {space.amenities.map((amenity, index) => (
                  <div className="amenity" key={index}>
                    <span className="amenity-icon">✓</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-section">
              <h2>Hosted by {space.host.name}</h2>
              <div className="host-info">
                <div className="host-stats">
                  <div className="host-stat">
                    <span className="host-stat-label">Response time</span>
                    <span className="host-stat-value">{space.host.responseTime}</span>
                  </div>
                  <div className="host-stat">
                    <span className="host-stat-label">Rating</span>
                    <span className="host-stat-value">★ {space.host.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-booking-container">
            <div className="booking-card">
              {!bookingSubmitted ? (
                <>
                  <div className="booking-header">
                    <h3>Book this space</h3>
                    <div className="booking-price">
                      <span className="price">${space.pricePerHour}</span>
                      <span className="price-period">/ hour</span>
                    </div>
                  </div>
                  
                  <form className="booking-form" onSubmit={handleSubmitBooking}>
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        min={format(new Date(), 'yyyy-MM-dd')}
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="startTime">Start Time</label>
                        <input 
                          type="time" 
                          id="startTime"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="endTime">End Time</label>
                        <input 
                          type="time" 
                          id="endTime"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="price-summary">
                      <div className="price-row">
                        <span>${space.pricePerHour} × {hours} hours</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="price-total">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    {currentUser ? (
                      <button type="submit" className="button button-primary button-full">
                        Reserve
                      </button>
                    ) : (
                      <Link to="/login" className="button button-primary button-full">
                        Login to Book
                      </Link>
                    )}
                  </form>
                </>
              ) : (
                <div className="booking-success">
                  <div className="success-icon">✓</div>
                  <h3>Booking Submitted!</h3>
                  <p>Your booking request has been submitted successfully.</p>
                  <p className="booking-details">
                    <strong>Date:</strong> {bookingDate}<br />
                    <strong>Time:</strong> {startTime} - {endTime}<br />
                    <strong>Total:</strong> ${totalPrice.toFixed(2)}
                  </p>
                  <p>Check your email for confirmation details.</p>
                  <Link to="/profile" className="button button-primary button-full">
                    View My Bookings
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;