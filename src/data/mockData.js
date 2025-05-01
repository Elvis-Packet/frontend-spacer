export const mockSpaces = [
    {
      id: 1,
      name: 'Modern Downtown Office',
      type: 'Office Space',
      description: 'A sleek, modern office space in the heart of downtown, perfect for meetings and collaborative work.',
      location: 'Downtown, New York',
      pricePerHour: 45,
      pricePerDay: 320,
      rating: 4.8,
      reviews: 124,
      capacity: 12,
      area: 800,
      featured: true,
      discount: 15,
      amenities: [
        'High-speed WiFi',
        'Conference room',
        'Kitchen',
        'Projector',
        'Whiteboards',
        'Parking',
        'Coffee/Tea',
        'Air conditioning'
      ],
      features: [
        'WiFi',
        'Conference Room',
        'Parking'
      ],
      images: [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      host: {
        id: 101,
        name: 'Jessica Smith',
        rating: 4.9,
        responseTime: '< 1 hour'
      },
      availability: [
        { date: '2025-03-01', slots: ['9:00-12:00', '13:00-17:00'] },
        { date: '2025-03-02', slots: ['9:00-12:00', '13:00-17:00'] }
      ]
    },
    {
      id: 2,
      name: 'Cozy Art Studio',
      type: 'Creative Studio',
      description: 'A bright and spacious art studio with natural lighting, perfect for photography or artistic work.',
      location: 'Williamsburg, Brooklyn',
      pricePerHour: 35,
      pricePerDay: 250,
      rating: 4.6,
      reviews: 87,
      capacity: 6,
      area: 500,
      featured: true,
      discount: null,
      amenities: [
        'Natural lighting',
        'Storage space',
        'Sink/water access',
        'WiFi',
        'Restroom',
        'Climate control',
        'Sound system'
      ],
      features: [
        'Natural Light',
        'Storage',
        'Sound System'
      ],
      images: [
        'https://images.pexels.com/photos/6306387/pexels-photo-6306387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5083407/pexels-photo-5083407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      host: {
        id: 102,
        name: 'Miguel Rodriguez',
        rating: 4.7,
        responseTime: '< 2 hours'
      },
      availability: [
        { date: '2025-03-01', slots: ['10:00-14:00', '15:00-19:00'] },
        { date: '2025-03-02', slots: ['10:00-14:00', '15:00-19:00'] }
      ]
    },
    {
      id: 3,
      name: 'Elegant Event Hall',
      type: 'Event Venue',
      description: 'An elegant venue with modern fixtures, ideal for corporate events, weddings, and social gatherings.',
      location: 'Midtown, Chicago',
      pricePerHour: 120,
      pricePerDay: 900,
      rating: 4.9,
      reviews: 215,
      capacity: 100,
      area: 2500,
      featured: true,
      discount: 10,
      amenities: [
        'Stage/podium',
        'Sound system',
        'Lighting',
        'Tables/chairs',
        'Catering area',
        'Coat check',
        'Parking',
        'WiFi',
        'Restrooms'
      ],
      features: [
        'Sound System',
        'Catering Area',
        'Parking'
      ],
      images: [
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/265900/pexels-photo-265900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      host: {
        id: 103,
        name: 'Sophia Chen',
        rating: 4.8,
        responseTime: '< 1 hour'
      },
      availability: [
        { date: '2025-03-05', slots: ['9:00-23:00'] },
        { date: '2025-03-06', slots: ['9:00-23:00'] }
      ]
    },
    {
      id: 4,
      name: 'Tech-Ready Conference Room',
      type: 'Meeting Room',
      description: 'A professional meeting space with state-of-the-art technology and presentation equipment.',
      location: 'Financial District, San Francisco',
      pricePerHour: 60,
      pricePerDay: 420,
      rating: 4.7,
      reviews: 93,
      capacity: 20,
      area: 600,
      featured: true,
      discount: null,
      amenities: [
        'Video conferencing',
        'Interactive whiteboard',
        'Ultra-fast WiFi',
        'Presentation screens',
        'Ergonomic chairs',
        'Coffee/tea service',
        'Water service',
        'Climate control'
      ],
      features: [
        'Video Conferencing',
        'Fast WiFi',
        'Whiteboard'
      ],
      images: [
        'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      host: {
        id: 104,
        name: 'David Washington',
        rating: 4.6,
        responseTime: '< 3 hours'
      },
      availability: [
        { date: '2025-03-01', slots: ['8:00-12:00', '13:00-17:00', '18:00-20:00'] },
        { date: '2025-03-02', slots: ['8:00-12:00', '13:00-17:00'] }
      ]
    }
  ];
  
  export const mockUsers = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@spacer.com',
      role: 'admin',
      bookings: [2, 3]
    },
    {
      id: 2,
      name: 'Regular User',
      email: 'user@spacer.com',
      role: 'user',
      bookings: [1, 4]
    }
  ];
  
  export const mockBookings = [
    {
      id: 1,
      spaceId: 1,
      userId: 2,
      date: '2025-03-15',
      startTime: '10:00',
      endTime: '14:00',
      totalPrice: 180,
      status: 'confirmed',
      createdAt: '2025-03-01T12:00:00Z'
    },
    {
      id: 2,
      spaceId: 2,
      userId: 1,
      date: '2025-03-16',
      startTime: '12:00',
      endTime: '16:00',
      totalPrice: 140,
      status: 'confirmed',
      createdAt: '2025-03-02T09:30:00Z'
    },
    {
      id: 3,
      spaceId: 3,
      userId: 1,
      date: '2025-04-01',
      startTime: '18:00',
      endTime: '22:00',
      totalPrice: 480,
      status: 'pending',
      createdAt: '2025-03-03T14:15:00Z'
    },
    {
      id: 4,
      spaceId: 4,
      userId: 2,
      date: '2025-03-20',
      startTime: '09:00',
      endTime: '17:00',
      totalPrice: 480,
      status: 'confirmed',
      createdAt: '2025-03-05T11:45:00Z'
    }
  ];