import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  onSignOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onSignOut }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/signin', '/signup'].includes(location.pathname);

  if (isLandingPage || isAuthPage) {
    return null;
  }

  return (
    <nav className="bg-dark-100 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-white" />
              <span className="text-xl font-cera text-white">EWNET</span>
            </Link>
            {isAuthenticated && (
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                  to="/home"
                  className="nav-link font-cera text-sm tracking-wider"
                >
                  DASHBOARD
                </Link>
                <Link
                  to="/facts"
                  className="nav-link font-cera text-sm tracking-wider"
                >
                  FACTS
                </Link>
                <Link
                  to="/profile"
                  className="nav-link font-cera text-sm tracking-wider"
                >
                  PROFILE
                </Link>
              </div>
            )}
          </div>
          {isAuthenticated && (
            <div className="flex items-center">
              <button
                onClick={onSignOut}
                className="btn-secondary text-sm tracking-wider font-cera"
              >
                SIGN OUT
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;