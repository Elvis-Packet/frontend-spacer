import React from 'react';

const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-content">
        <p>Welcome to your profile page. Here you can view and edit your profile information.</p>
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="profile-form">
            {/* Profile information form would go here */}
            <p>This page is under construction. Profile editing will be available soon.</p>
          </div>
        </div>
        <div className="profile-section">
          <h2>Your Bookings</h2>
          <div className="bookings-list">
            {/* Bookings list would go here */}
            <p>No bookings found. Your future bookings will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;