import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Lock, User, ArrowRight } from 'lucide-react';

interface SignUpPageProps {
  onSignIn: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="min-h-screen flex bg-dark">
      <div className="hidden lg:block relative w-0 flex-1 image-hover">
        <img
          src="https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&q=80"
          alt="Ethiopian Landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
              JOIN THE TRUTH MOVEMENT
            </h2>
            <p className="text-xl text-gray-300">
              Help build a more informed Ethiopia by verifying political claims and combating misinformation
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white tracking-tight">
            CREATE ACCOUNT
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/signin" className="text-white hover:text-gray-300 font-medium">
              Sign in
            </Link>
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2 tracking-wider">
                  FULL NAME
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field pl-12"
                    placeholder="John Doe"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2 tracking-wider">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field pl-12"
                    placeholder="you@example.com"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm text-gray-400 mb-2 tracking-wider">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pl-12"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary tracking-wider group flex items-center justify-center"
            >
              CREATE ACCOUNT
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              By signing up, you agree to our Terms and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;