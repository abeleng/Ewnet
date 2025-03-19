import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80",
      title: "POLITICAL DISCOURSE"
    },
    {
      url: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&q=80",
      title: "ETHIOPIAN HERITAGE"
    },
    {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80",
      title: "MODERN GOVERNANCE"
    }
  ];

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <header className="absolute top-0 w-full z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-white" />
            <span className="text-xl font-sans text-white tracking-wider">EWNET</span>
          </div>
          <div className="space-x-6">
            <Link to="/signin" className="text-white hover:text-gray-300 font-sans text-sm tracking-wider">
              SIGN IN
            </Link>
            <Link to="/signup" className="btn-primary font-sans text-sm tracking-wider">
              JOIN NOW
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="relative h-screen image-hover">
          <img 
            src="https://images.unsplash.com/photo-1576437125754-22b8a7c58d99?auto=format&fit=crop&q=80&w=2070"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="overlay-gradient"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="max-w-4xl text-center animate-fade-in">
              <h1 className="text-7xl font-sans font-bold text-white mb-8 tracking-tight">
                TRUTH IN<br/>ETHIOPIAN POLITICS
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                AI-powered fact-checking platform dedicated to verifying political claims and combating misinformation
              </p>
              <Link to="/signup" className="btn-primary text-lg font-sans tracking-wider inline-flex items-center group">
                START FACT-CHECKING
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item image-hover">
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay-gradient"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-sans text-white tracking-wider">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="py-24 bg-dark-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-sans font-bold text-white mb-6 tracking-tight">
                  EMPOWERING TRUTH IN DIGITAL AGE
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our platform combines advanced AI technology with human expertise to verify political claims and combat misinformation in Ethiopian politics.
                </p>
                <Link to="/signup" className="btn-secondary inline-flex items-center group">
                  LEARN MORE
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              <div className="image-hover">
                <img 
                  src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&q=80"
                  alt="Digital Age"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark-100 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-6 w-6 text-white" />
            <span className="text-xl font-sans text-white">EWNET</span>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            © 2024 Ewnet - Ethiopian Political Fact-Checking Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;