import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Lock } from 'lucide-react';

interface SignInPageProps {
  onSignIn: () => void;
}

const SignInPage: React.FC<SignInPageProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="min-h-screen flex bg-dark">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-cera text-white tracking-tight">
            WELCOME BACK
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:text-gray-300 font-medium">
              Sign up
            </Link>
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-cera text-gray-400 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-cera text-gray-400 mb-2">
                  PASSWORD
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn-primary font-cera tracking-wider"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-dark-200">
          <div className="flex h-full items-center justify-center px-8">
            <div className="max-w-md">
              <h2 className="text-4xl font-cera font-bold text-white mb-6 tracking-tight">
                VERIFY POLITICAL CLAIMS WITH AI
              </h2>
              <p className="text-xl text-gray-400">
                Join our community of fact-checkers and help combat misinformation in Ethiopian politics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;