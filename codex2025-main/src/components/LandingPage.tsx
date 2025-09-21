import React from 'react';
import { TrendingUp, Brain, MapPin, Target, Zap, Shield, Gift, Star } from 'lucide-react';
import { masumiAgent } from '../utils/masumiAgent';

interface LandingPageProps {
  onServiceSelect: (serviceId: string) => void;
  onConnectWallet: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onServiceSelect, onConnectWallet }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-800 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Navigate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-600">Cardano Career</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized career guidance powered by on-chain analysis. Our Masumi AI agent analyzes your wallet activity to create tailored learning paths and unlock opportunities in the Cardano ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onConnectWallet}
                className="bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </button>
              <button className="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Career Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of specialized services designed to accelerate your growth in the Cardano ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masumiAgent.services.map((service, index) => {
              const icons = [Brain, MapPin, Target];
              const Icon = icons[index];
              const gradients = [
                'from-blue-500 to-blue-700',
                'from-teal-500 to-teal-700',
                'from-orange-500 to-orange-700'
              ];

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {masumiAgent.formatPrice(service.price)}
                    </span>
                    <button
                      onClick={() => onServiceSelect(service.id)}
                      className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Career Navigator?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Cardano ecosystem with unique features you won't find anywhere else
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Chain Analysis</h3>
              <p className="text-gray-600">Real analysis of your wallet activity to determine your skills and experience level</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Begin Wallet Integration</h3>
              <p className="text-gray-600">Seamless integration with Begin Wallet features including eSIM rewards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-orange-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">NFT Achievements</h3>
              <p className="text-gray-600">Earn verifiable NFT certificates for completing major learning milestones</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Opportunities</h3>
              <p className="text-gray-600">Real-time Project Catalyst rounds and bounty opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">78%</div>
              <div className="text-lg opacity-90">of users struggle with where to start in Cardano</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">successful career transitions guided</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-lg opacity-90">average time to get personalized roadmap</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};