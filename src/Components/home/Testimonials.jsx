import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <div className="testimonials">
      <div className="testimonial-carousel">
        <div className="testimonial-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="testimonial-controls">
        <button className="control-button" onClick={prevTestimonial}>
          ←
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        <button className="control-button" onClick={nextTestimonial}>
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonials;