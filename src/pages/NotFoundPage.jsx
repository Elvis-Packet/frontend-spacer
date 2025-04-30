import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-message">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="button button-primary">
              Go to Homepage
            </Link>
            <Link to="/spaces" className="button button-secondary">
              Browse Spaces
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;