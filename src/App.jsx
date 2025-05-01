import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import HomePage from './pages/HomePage';
import SpacesPage from './pages/SpacesPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSpace from './pages/admin/AdminSpace';
import AdminUser from './pages/admin/AdminUser';
import UserProfile from './pages/UserProfile';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './Components/auth/ProtectedRoute';
import './styles/global.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/spaces" element={<SpacesPage />} />
              <Route path="/spaces/:id" element={<SpaceDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />
              <Route path="/admin" element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/spaces" element={
                <ProtectedRoute adminOnly={true}>
                  <AdminSpace />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute adminOnly={true}>
                  <AdminUser />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
