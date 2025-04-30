import { Link } from 'react-router-dom';
import './SpaceCategories.css';

const SpaceCategories = () => {
  const categories = [
    {
      id: 'office',
      name: 'Office Spaces',
      description: 'Professional environments for work and meetings',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: '#E6F0FF'
    },
    {
      id: 'event',
      name: 'Event Venues',
      description: 'Beautiful spaces for celebrations and gatherings',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: '#FFF1E6'
    },
    {
      id: 'studio',
      name: 'Creative Studios',
      description: 'Inspiring environments for artists and creators',
      image: 'https://images.pexels.com/photos/3585104/pexels-photo-3585104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: '#E6FFFB'
    },
    {
      id: 'meeting',
      name: 'Meeting Rooms',
      description: 'Functional spaces for productive discussions',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: '#F5FFE6'
    }
  ];

  return (
    <div className="space-categories">
      {categories.map((category) => (
        <Link 
          to={`/spaces?type=${category.id}`} 
          className="category-card" 
          key={category.id}
          style={{ backgroundColor: category.color }}
        >
          <div className="category-image-container">
            <img src={category.image} alt={category.name} className="category-image" />
          </div>
          <div className="category-content">
            <h3 className="category-title">{category.name}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SpaceCategories;