import { Assessment, Roadmap, Achievement, CatalystOpportunity, BountyOpportunity } from '../types';
import { getDemoDataForUser, getDemoWalletAddresses } from '../data/demoData';

// Simulated Cardano API calls
export const cardanoApi = {
  async analyzeWallet(walletAddress: string): Promise<Assessment> {
    // Check if this is a demo wallet address
    const demoData = getDemoDataForUser(walletAddress);
    if (demoData) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      return demoData.assessment;
    }
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis based on wallet address characteristics
    const mockTransactionCount = Math.floor(Math.random() * 1000) + 10;
    const complexityScore = Math.floor(Math.random() * 100);
    
    let experienceLevel: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
    if (mockTransactionCount > 100 && complexityScore > 50) {
      experienceLevel = 'advanced';
    } else if (mockTransactionCount > 50 || complexityScore > 30) {
      experienceLevel = 'intermediate';
    }
    
    const allSkills = ['Smart Contracts', 'DeFi', 'NFTs', 'Governance', 'Staking', 'Plutus', 'Aiken', 'MeshJS', 'Begin Wallet'];
    const technicalSkills = allSkills.filter(() => Math.random() > 0.6);
    
    const allInterests = ['DeFi Development', 'NFT Projects', 'Governance Participation', 'Education', 'Infrastructure', 'Mobile Apps'];
    const interests = allInterests.filter(() => Math.random() > 0.5);
    
    const learningStyles = ['Visual', 'Hands-on', 'Reading', 'Collaborative'];
    const learningStyle = learningStyles[Math.floor(Math.random() * learningStyles.length)];
    
    const careerPaths = ['Smart Contract Developer', 'DeFi Protocol Designer', 'Cardano Educator', 'dApp Developer', 'Blockchain Consultant'];
    const preferredCareerPath = careerPaths[Math.floor(Math.random() * careerPaths.length)];
    
    return {
      experienceLevel,
      technicalSkills,
      interests,
      learningStyle,
      preferredCareerPath,
      transactionCount: mockTransactionCount,
      complexityScore,
      nextSteps: [
        'Generate personalized learning roadmap',
        'Explore Project Catalyst opportunities',
        'Join Cardano developer community',
        'Start with MeshJS tutorials'
      ]
    };
  },

  async generateRoadmap(assessment: Assessment, timeline: '3-month' | '6-month' | '12-month'): Promise<Roadmap> {
    // Check if this is for a demo user by looking at assessment data
    const demoWallets = getDemoWalletAddresses();
    const isDemoUser = demoWallets.some(wallet => {
      const demoData = getDemoDataForUser(wallet);
      return demoData && 
        demoData.assessment.experienceLevel === assessment.experienceLevel &&
        demoData.assessment.preferredCareerPath === assessment.preferredCareerPath;
    });
    
    if (isDemoUser) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Find the matching demo roadmap
      for (const wallet of demoWallets) {
        const demoData = getDemoDataForUser(wallet);
        if (demoData && 
            demoData.assessment.experienceLevel === assessment.experienceLevel &&
            demoData.assessment.preferredCareerPath === assessment.preferredCareerPath) {
          return { ...demoData.roadmap, timeline }; // Use requested timeline
        }
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const baseMilestones = [
      {
        id: 'milestone-1',
        title: 'Complete Cardano Fundamentals',
        description: 'Learn core concepts of Cardano blockchain and its unique features',
        targetDate: '2025-02-15',
        completed: false,
        verificationSteps: ['Pass Cardano fundamentals quiz', 'Set up wallet', 'Make first transaction'],
        rewardType: 'esim' as const
      },
      {
        id: 'milestone-2',
        title: 'First Smart Contract Deployment',
        description: 'Deploy your first smart contract on Cardano testnet',
        targetDate: '2025-03-15',
        completed: false,
        verificationSteps: ['Write simple contract', 'Deploy to testnet', 'Interact with contract'],
        rewardType: 'nft' as const
      },
      {
        id: 'milestone-3',
        title: 'Project Catalyst Participation',
        description: 'Submit your first Project Catalyst proposal',
        targetDate: '2025-04-15',
        completed: false,
        verificationSteps: ['Research active rounds', 'Prepare proposal', 'Submit application'],
        rewardType: 'both' as const
      }
    ];

    const resources = [
      {
        title: 'Cardano Developer Portal',
        type: 'documentation' as const,
        url: 'https://developers.cardano.org',
        description: 'Official Cardano development resources',
        difficulty: 'beginner' as const
      },
      {
        title: 'MeshJS Framework',
        type: 'tool' as const,
        url: 'https://meshjs.dev',
        description: 'TypeScript framework for Cardano development',
        difficulty: 'intermediate' as const
      },
      {
        title: 'Aiken Smart Contract Language',
        type: 'documentation' as const,
        url: 'https://aiken-lang.org',
        description: 'Modern smart contract language for Cardano',
        difficulty: 'advanced' as const
      }
    ];

    return {
      timeline,
      milestones: baseMilestones,
      resources,
      catalystOpportunities: await this.getCatalystOpportunities(),
      bountyOpportunities: await this.getBountyOpportunities(),
      beginWalletTips: [
        'Use Begin Wallet metadata to track learning progress',
        'Leverage eSIM rewards for mobile development',
        'Integrate rating system for peer feedback'
      ]
    };
  },

  async getCatalystOpportunities(): Promise<CatalystOpportunity[]> {
    return [
      {
        id: 'catalyst-1',
        title: 'Developer Tools & Infrastructure',
        category: 'Development',
        fundingAmount: '$50,000 - $200,000',
        deadline: '2025-03-01',
        matchScore: 85,
        requirements: ['Technical expertise', 'Open source commitment', 'Community engagement']
      },
      {
        id: 'catalyst-2',
        title: 'Education & Onboarding',
        category: 'Education',
        fundingAmount: '$25,000 - $100,000',
        deadline: '2025-02-15',
        matchScore: 72,
        requirements: ['Educational background', 'Content creation', 'Cardano knowledge']
      }
    ];
  },

  async getBountyOpportunities(): Promise<BountyOpportunity[]> {
    return [
      {
        id: 'bounty-1',
        title: 'MeshJS Tutorial Creation',
        reward: '500 ADA',
        deadline: '2025-02-28',
        skillsRequired: ['JavaScript', 'MeshJS', 'Technical Writing'],
        description: 'Create comprehensive tutorials for MeshJS framework'
      },
      {
        id: 'bounty-2',
        title: 'Begin Wallet Integration Guide',
        reward: '300 ADA',
        deadline: '2025-03-15',
        skillsRequired: ['Mobile Development', 'Begin Wallet', 'Documentation'],
        description: 'Write integration guide for Begin Wallet features'
      }
    ];
  },

  async recordProgress(milestoneId: string, progress: number, walletAddress: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Return mock transaction hash
    return `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },

  async mintAchievementNFT(achievement: Achievement, walletAddress: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return `nft_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },

  async processPayment(amount: number, walletAddress: string, service: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Always succeed for demo wallets, 90% success rate for others
    const isDemoWallet = getDemoWalletAddresses().includes(walletAddress);
    return isDemoWallet || Math.random() > 0.1;
  }
};