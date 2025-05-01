import { useState, useEffect } from 'react';
import './HowitWorks.css';

const HowItWorks = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/api/how-it-works');
        const data = await response.json();
        setSteps(data);
      } catch (error) {
        console.error('Error fetching steps:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className="how-it-works">
      {steps.map((step, index) => (
        <div className="step" key={step.id}>
          <div className="step-icon">{step.icon}</div>
          <div className="step-content">
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
          {index < steps.length - 1 && <div className="step-connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;