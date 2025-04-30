import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const { currentUser, logout, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={`header ${isScrolled || !isHomePage ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">Spacer</Link>
        
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/spaces" onClick={() => setMobileMenuOpen(false)}>Spaces</Link></li>
            {currentUser ? (
              <>
                <li className="dropdown">
                  <button className="dropdown-button">
                    {currentUser.name}
                  </button>
                  <div className="dropdown-content">
                    <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>Profile</Link>
                    {isAdmin && (
                      <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin Dashboard</Link>
                    )}
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="auth-buttons">
                  <Link to="/login" className="button button-secondary" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="button button-primary" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;