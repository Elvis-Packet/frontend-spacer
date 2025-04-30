import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mockSpaces } from '../data/mockData';
import SpaceCard from '../Components/spaces/SpacesCard';
import './SpacesPage.css';

const SpacesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || 'all';
  const initialQuery = queryParams.get('q') || '';

  const [spaces, setSpaces] = useState([]);
  const [filteredSpaces, setFilteredSpaces] = useState([]);
  const [filters, setFilters] = useState({
    type: initialType,
    query: initialQuery,
    minPrice: '',
    maxPrice: '',
    capacity: '',
    sortBy: 'recommended'
  });

  useEffect(() => {
    // In a real app, this would be an API call with filters
    setSpaces(mockSpaces);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [spaces, filters]);

  const applyFilters = () => {
    let filtered = [...spaces];
    
    // Filter by type
    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(space => 
        space.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
    
    // Filter by search query
    if (filters.query) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(space => 
        space.name.toLowerCase().includes(query) || 
        space.description.toLowerCase().includes(query) ||
        space.location.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range
    if (filters.minPrice) {
      filtered = filtered.filter(space => space.pricePerHour >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(space => space.pricePerHour <= parseInt(filters.maxPrice));
    }
    
    // Filter by capacity
    if (filters.capacity) {
      filtered = filtered.filter(space => space.capacity >= parseInt(filters.capacity));
    }
    
    // Sort spaces
    switch(filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricePerHour - b.pricePerHour);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricePerHour - a.pricePerHour);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'recommended'
        // Already in recommended order in mock data
        break;
    }
    
    setFilteredSpaces(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      query: '',
      minPrice: '',
      maxPrice: '',
      capacity: '',
      sortBy: 'recommended'
    });
  };

  return (
    <div className="spaces-page">
      <div className="container">
        <div className="spaces-header">
          <h1>Find Your Perfect Space</h1>
          <p>Discover unique spaces for your next meeting, event, or creative project</p>
        </div>
        
        <div className="spaces-container">
          <aside className="filters-sidebar">
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="clear-filters" onClick={clearFilters}>Clear All</button>
            </div>
            
            <div className="filter-group">
              <label htmlFor="type">Space Type</label>
              <select 
                id="type" 
                name="type" 
                value={filters.type} 
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="all">All Types</option>
                <option value="office">Office Spaces</option>
                <option value="event">Event Venues</option>
                <option value="studio">Creative Studios</option>
                <option value="meeting">Meeting Rooms</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="minPrice">Price Range (per hour)</label>
              <div className="price-range">
                <input 
                  type="number" 
                  id="minPrice" 
                  name="minPrice" 
                  placeholder="Min" 
                  value={filters.minPrice} 
                  onChange={handleFilterChange}
                  className="filter-input"
                />
                <span>-</span>
                <input 
                  type="number" 
                  id="maxPrice" 
                  name="maxPrice" 
                  placeholder="Max" 
                  value={filters.maxPrice} 
                  onChange={handleFilterChange}
                  className="filter-input"
                />
              </div>
            </div>
            
            <div className="filter-group">
              <label htmlFor="capacity">Minimum Capacity</label>
              <input 
                type="number" 
                id="capacity" 
                name="capacity" 
                placeholder="Number of people" 
                value={filters.capacity} 
                onChange={handleFilterChange}
                className="filter-input"
              />
            </div>
            
            <div className="filter-group">
              <label htmlFor="sortBy">Sort By</label>
              <select 
                id="sortBy" 
                name="sortBy" 
                value={filters.sortBy} 
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </aside>
          
          <div className="spaces-results">
            <div className="results-header">
              <div className="results-count">
                <span>{filteredSpaces.length} spaces</span>
              </div>
              
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search spaces..." 
                  value={filters.query} 
                  onChange={(e) => setFilters({...filters, query: e.target.value})}
                  className="search-input"
                />
              </div>
            </div>
            
            {filteredSpaces.length > 0 ? (
              <div className="spaces-grid">
                {filteredSpaces.map(space => (
                  <SpaceCard key={space.id} space={space} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No spaces match your current filters.</p>
                <button onClick={clearFilters} className="button button-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacesPage;