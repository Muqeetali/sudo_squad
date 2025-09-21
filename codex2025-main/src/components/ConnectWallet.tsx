import React, { useState } from 'react';
import { Wallet, ArrowRight, Shield, Zap } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { User } from '../types';
import { getDemoWalletAddresses } from '../data/demoData';

interface ConnectWalletProps {
  onConnected: () => void;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnected }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const { setUser } = useUser();

  const demoAddresses = getDemoWalletAddresses();

  const handleConnect = async () => {
    if (!walletAddress.trim()) return;
    
    setIsConnecting(true);
    
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: `user_${Date.now()}`,
      walletAddress: walletAddress.trim(),
      experienceLevel: 'beginner',
      technicalSkills: [],
      interests: [],
      learningStyle: '',
      preferredCareerPath: '',
      assessmentComplete: false,
      roadmapGenerated: false,
      catalystGuidanceReceived: false,
    };
    
    setUser(newUser);
    setIsConnecting(false);
    onConnected();
  };

  const handleDemoConnect = (index: number = 0) => {
    const demoAddress = demoAddresses[index];
    setWalletAddress(demoAddress);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Wallet</h2>
            <p className="text-gray-600">
              Connect your Cardano wallet to start your personalized career journey
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="wallet-address" className="block text-sm font-medium text-gray-700 mb-2">
                Wallet Address
              </label>
              <input
                id="wallet-address"
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="addr1..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 text-center">Try demo accounts:</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleDemoConnect(0)}
                  className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded hover:bg-blue-100 transition-colors"
                >
                  Beginner
                </button>
                <button
                  onClick={() => handleDemoConnect(1)}
                  className="text-xs bg-teal-50 text-teal-800 px-2 py-1 rounded hover:bg-teal-100 transition-colors"
                >
                  Intermediate
                </button>
                <button
                  onClick={() => handleDemoConnect(2)}
                  className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded hover:bg-orange-100 transition-colors"
                >
                  Advanced
                </button>
              </div>
            </div>

            <button
              onClick={handleConnect}
              disabled={!walletAddress.trim() || isConnecting}
              className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isConnecting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <span>Connect Wallet</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure Connection</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Zap className="w-4 h-4 text-yellow-600" />
                <span>Begin Wallet Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};