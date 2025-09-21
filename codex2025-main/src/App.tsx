import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './contexts/UserContext';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { ConnectWallet } from './components/ConnectWallet';
import { Dashboard } from './components/Dashboard';
import { SkillsAssessment } from './components/SkillsAssessment';
import { RoadmapGenerator } from './components/RoadmapGenerator';
import { PaymentModal } from './components/PaymentModal';
import { ProgressTracker } from './components/ProgressTracker';
import { AchievementGallery } from './components/AchievementGallery';
import { masumiAgent } from './utils/masumiAgent';

type Page = 'landing' | 'connect' | 'dashboard' | 'assessment' | 'roadmap' | 'catalyst' | 'progress' | 'achievements';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    // Register Masumi agent on app load
    masumiAgent.register().then(() => {
      console.log('Masumi agent registered successfully');
    }).catch(error => {
      console.error('Failed to register Masumi agent:', error);
    });
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
  };

  const handleConnectWallet = () => {
    setCurrentPage('connect');
  };

  const handleWalletConnected = () => {
    setCurrentPage('dashboard');
  };

  const handleServiceSelect = (serviceId: string) => {
    if (!user) {
      handleConnectWallet();
      return;
    }

    setSelectedService(serviceId);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    
    // Navigate to appropriate service page
    switch (selectedService) {
      case 'skills-assessment':
        setCurrentPage('assessment');
        break;
      case 'roadmap-generation':
        setCurrentPage('roadmap');
        break;
      case 'catalyst-guidance':
        setCurrentPage('catalyst');
        break;
    }
    
    setSelectedService(null);
  };

  const handleServiceComplete = () => {
    setCurrentPage('dashboard');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingPage 
            onServiceSelect={handleServiceSelect}
            onConnectWallet={handleConnectWallet}
          />
        );
      
      case 'connect':
        return <ConnectWallet onConnected={handleWalletConnected} />;
      
      case 'dashboard':
        return <Dashboard onServiceSelect={handleServiceSelect} />;
      
      case 'assessment':
        return <SkillsAssessment onComplete={handleServiceComplete} />;
      
      case 'roadmap':
        return <RoadmapGenerator onComplete={handleServiceComplete} />;
      
      case 'progress':
        return <ProgressTracker />;
      
      case 'achievements':
        return <AchievementGallery />;
      
      case 'catalyst':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p>Catalyst Guidance - Coming Soon</p>
        </div>;
      
      default:
        return (
          <LandingPage 
            onServiceSelect={handleServiceSelect}
            onConnectWallet={handleConnectWallet}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      
      {showPaymentModal && selectedService && user && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedService(null);
          }}
          serviceId={selectedService}
          walletAddress={user.walletAddress}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;