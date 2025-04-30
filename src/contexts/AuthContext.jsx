import { createContext, useState, useEffect, useContext } from 'react';

// Create the auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on component mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // This is a mock login function for demonstration
    // In a real app, you would call your API here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Demo users (would come from API in real app)
        if (email === 'admin@spacer.com' && password === 'password') {
          const user = { id: 1, name: 'Admin User', email, role: 'admin' };
          setCurrentUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else if (email === 'user@spacer.com' && password === 'password') {
          const user = { id: 2, name: 'Regular User', email, role: 'user' };
          setCurrentUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  // Signup function
  const signup = (name, email, password) => {
    // This is a mock signup function
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: Date.now(), name, email, role: 'user' };
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAdmin: currentUser?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};