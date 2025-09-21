import React from 'react';
import { Wallet, User, Award, TrendingUp } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const { user } = useUser();

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onPageChange('landing')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-teal-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Career Navigator</h1>
              <p className="text-xs text-gray-600">Powered by Masumi AI</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onPageChange('landing')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'landing'
                  ? 'text-blue-800 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              Services
            </button>
            {user && (
              <>
                <button
                  onClick={() => onPageChange('dashboard')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'dashboard'
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => onPageChange('progress')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'progress'
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  Progress
                </button>
                <button
                  onClick={() => onPageChange('achievements')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'achievements'
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  Achievements
                </button>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">
                    {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {user.experienceLevel}
                  </span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => onPageChange('connect')}
                className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect Wallet</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};