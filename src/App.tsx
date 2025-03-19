import React from 'react';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import FactsListPage from './pages/FactsListPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/signin" 
          element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <SignInPage onSignIn={handleSignIn} />
          } 
        />
        <Route 
          path="/signup" 
          element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <SignUpPage onSignIn={handleSignIn} />
          } 
        />
        <Route 
          path="/home" 
          element={
            isAuthenticated ? 
            <HomePage /> : 
            <Navigate to="/signin" replace />
          } 
        />
        <Route 
          path="/facts" 
          element={
            isAuthenticated ? 
            <FactsListPage /> : 
            <Navigate to="/signin" replace />
          } 
        />
        <Route 
          path="/profile" 
          element={
            isAuthenticated ? 
            <ProfilePage onSignOut={handleSignOut} /> : 
            <Navigate to="/signin" replace />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;