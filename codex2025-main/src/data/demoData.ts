import { User, Assessment, Roadmap, Achievement, ProgressEntry, Milestone, Resource, CatalystOpportunity, BountyOpportunity } from '../types';

// Demo Users with different profiles
export const demoUsers: User[] = [
  {
    id: 'user_beginner_001',
    walletAddress: 'addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3jcu5d8ps7zex2k2xt3uqxgjqnnj0vs2f4z',
    experienceLevel: 'beginner',
    technicalSkills: ['Basic Wallet Usage', 'ADA Staking'],
    interests: ['DeFi Development', 'Education'],
    learningStyle: 'Visual',
    preferredCareerPath: 'Smart Contract Developer',
    assessmentComplete: true,
    roadmapGenerated: true,
    catalystGuidanceReceived: false,
  },
  {
    id: 'user_intermediate_002',
    walletAddress: 'addr1q9f7qk8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x8v9n4x',
    experienceLevel: 'intermediate',
    technicalSkills: ['Smart Contracts', 'MeshJS', 'NFTs', 'Governance', 'Begin Wallet'],
    interests: ['NFT Projects', 'Governance Participation', 'Mobile Apps'],
    learningStyle: 'Hands-on',
    preferredCareerPath: 'dApp Developer',
    assessmentComplete: true,
    roadmapGenerated: true,
    catalystGuidanceReceived: true,
  },
  {
    id: 'user_advanced_003',
    walletAddress: 'addr1qy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7qqy8ac7q',
    experienceLevel: 'advanced',
    technicalSkills: ['Smart Contracts', 'DeFi', 'NFTs', 'Governance', 'Staking', 'Plutus', 'Aiken', 'MeshJS', 'Begin Wallet'],
    interests: ['DeFi Development', 'Infrastructure', 'Education', 'Governance Participation'],
    learningStyle: 'Collaborative',
    preferredCareerPath: 'Blockchain Consultant',
    assessmentComplete: true,
    roadmapGenerated: true,
    catalystGuidanceReceived: true,
  }
];

// Demo Assessments
export const demoAssessments: Record<string, Assessment> = {
  'user_beginner_001': {
    experienceLevel: 'beginner',
    technicalSkills: ['Basic Wallet Usage', 'ADA Staking'],
    interests: ['DeFi Development', 'Education'],
    learningStyle: 'Visual',
    preferredCareerPath: 'Smart Contract Developer',
    transactionCount: 23,
    complexityScore: 15,
    nextSteps: [
      'Complete Cardano fundamentals course',
      'Set up development environment',
      'Learn MeshJS basics',
      'Join Cardano developer community'
    ]
  },
  'user_intermediate_002': {
    experienceLevel: 'intermediate',
    technicalSkills: ['Smart Contracts', 'MeshJS', 'NFTs', 'Governance', 'Begin Wallet'],
    interests: ['NFT Projects', 'Governance Participation', 'Mobile Apps'],
    learningStyle: 'Hands-on',
    preferredCareerPath: 'dApp Developer',
    transactionCount: 156,
    complexityScore: 67,
    nextSteps: [
      'Build first production dApp',
      'Contribute to open source projects',
      'Apply for Project Catalyst funding',
      'Mentor other developers'
    ]
  },
  'user_advanced_003': {
    experienceLevel: 'advanced',
    technicalSkills: ['Smart Contracts', 'DeFi', 'NFTs', 'Governance', 'Staking', 'Plutus', 'Aiken', 'MeshJS', 'Begin Wallet'],
    interests: ['DeFi Development', 'Infrastructure', 'Education', 'Governance Participation'],
    learningStyle: 'Collaborative',
    preferredCareerPath: 'Blockchain Consultant',
    transactionCount: 847,
    complexityScore: 92,
    nextSteps: [
      'Lead major ecosystem project',
      'Establish consulting practice',
      'Speak at conferences',
      'Publish research papers'
    ]
  }
};

// Demo Roadmaps
export const demoRoadmaps: Record<string, Roadmap> = {
  'user_beginner_001': {
    timeline: '6-month',
    milestones: [
      {
        id: 'milestone-beginner-1',
        title: 'Cardano Fundamentals Mastery',
        description: 'Complete comprehensive understanding of Cardano blockchain architecture, consensus mechanism, and core concepts',
        targetDate: '2025-03-15',
        completed: true,
        verificationSteps: [
          'Pass Cardano fundamentals assessment with 85%+ score',
          'Set up Cardano wallet and perform basic transactions',
          'Understand UTXO model and eUTXO extensions'
        ],
        rewardType: 'esim'
      },
      {
        id: 'milestone-beginner-2',
        title: 'Development Environment Setup',
        description: 'Establish complete development environment for Cardano smart contract development',
        targetDate: '2025-04-01',
        completed: true,
        verificationSteps: [
          'Install and configure Cardano node',
          'Set up MeshJS development environment',
          'Deploy first Hello World contract to testnet'
        ],
        rewardType: 'nft'
      },
      {
        id: 'milestone-beginner-3',
        title: 'First Smart Contract Deployment',
        description: 'Successfully deploy and interact with your first smart contract on Cardano testnet',
        targetDate: '2025-05-01',
        completed: false,
        verificationSteps: [
          'Write simple vesting contract using Aiken',
          'Deploy contract to Cardano testnet',
          'Create frontend interaction using MeshJS',
          'Document the development process'
        ],
        rewardType: 'both'
      },
      {
        id: 'milestone-beginner-4',
        title: 'Community Engagement',
        description: 'Actively participate in Cardano developer community and contribute to ecosystem',
        targetDate: '2025-06-15',
        completed: false,
        verificationSteps: [
          'Join Cardano Stack Exchange and answer 5 questions',
          'Contribute to open source Cardano project',
          'Attend virtual Cardano developer meetup',
          'Share learning journey on social media'
        ],
        rewardType: 'esim'
      },
      {
        id: 'milestone-beginner-5',
        title: 'Project Catalyst Readiness',
        description: 'Prepare for first Project Catalyst proposal submission',
        targetDate: '2025-07-30',
        completed: false,
        verificationSteps: [
          'Complete Catalyst Academy course',
          'Draft initial project proposal',
          'Get community feedback on proposal idea',
          'Understand Catalyst voting process'
        ],
        rewardType: 'nft'
      }
    ],
    resources: [
      {
        title: 'Cardano Developer Portal',
        type: 'documentation',
        url: 'https://developers.cardano.org',
        description: 'Official comprehensive guide to Cardano development',
        difficulty: 'beginner'
      },
      {
        title: 'MeshJS Getting Started',
        type: 'tutorial',
        url: 'https://meshjs.dev/guides/getting-started',
        description: 'Step-by-step guide to building with MeshJS',
        difficulty: 'beginner'
      },
      {
        title: 'Aiken Language Tutorial',
        type: 'course',
        url: 'https://aiken-lang.org/getting-started',
        description: 'Learn Aiken smart contract language from basics',
        difficulty: 'intermediate'
      },
      {
        title: 'Cardano Stack Exchange',
        type: 'tool',
        url: 'https://cardano.stackexchange.com',
        description: 'Community Q&A platform for Cardano developers',
        difficulty: 'beginner'
      }
    ],
    catalystOpportunities: [
      {
        id: 'catalyst-beginner-1',
        title: 'Developer Tools & Infrastructure',
        category: 'Development',
        fundingAmount: '$25,000 - $75,000',
        deadline: '2025-03-01',
        matchScore: 78,
        requirements: ['Basic technical skills', 'Clear project scope', 'Community benefit']
      },
      {
        id: 'catalyst-beginner-2',
        title: 'Education & Onboarding',
        category: 'Education',
        fundingAmount: '$10,000 - $50,000',
        deadline: '2025-02-15',
        matchScore: 85,
        requirements: ['Educational content creation', 'Beginner-friendly approach', 'Measurable outcomes']
      }
    ],
    bountyOpportunities: [
      {
        id: 'bounty-beginner-1',
        title: 'Beginner Tutorial Series',
        reward: '200 ADA',
        deadline: '2025-03-30',
        skillsRequired: ['Technical Writing', 'Basic Cardano Knowledge'],
        description: 'Create beginner-friendly tutorial series for new Cardano developers'
      },
      {
        id: 'bounty-beginner-2',
        title: 'MeshJS Code Examples',
        reward: '150 ADA',
        deadline: '2025-04-15',
        skillsRequired: ['JavaScript', 'MeshJS', 'Documentation'],
        description: 'Contribute practical code examples to MeshJS documentation'
      }
    ],
    beginWalletTips: [
      'Use Begin Wallet metadata to track your learning milestones',
      'Leverage eSIM rewards for mobile development testing',
      'Rate completed tutorials using Begin Wallet rating system',
      'Share progress updates through Begin Wallet social features'
    ]
  },
  'user_intermediate_002': {
    timeline: '6-month',
    milestones: [
      {
        id: 'milestone-intermediate-1',
        title: 'Production dApp Development',
        description: 'Build and deploy a full-featured decentralized application on Cardano mainnet',
        targetDate: '2025-03-01',
        completed: true,
        verificationSteps: [
          'Design comprehensive dApp architecture',
          'Implement smart contracts with proper testing',
          'Create responsive frontend with MeshJS integration',
          'Deploy to mainnet with proper security audits'
        ],
        rewardType: 'both'
      },
      {
        id: 'milestone-intermediate-2',
        title: 'NFT Marketplace Creation',
        description: 'Develop a fully functional NFT marketplace with advanced features',
        targetDate: '2025-04-15',
        completed: true,
        verificationSteps: [
          'Implement NFT minting and trading functionality',
          'Add royalty distribution system',
          'Integrate with multiple wallet providers',
          'Implement advanced search and filtering'
        ],
        rewardType: 'nft'
      },
      {
        id: 'milestone-intermediate-3',
        title: 'Open Source Contribution',
        description: 'Make significant contributions to major Cardano ecosystem projects',
        targetDate: '2025-05-30',
        completed: false,
        verificationSteps: [
          'Identify high-impact open source project',
          'Submit 3+ meaningful pull requests',
          'Help with code reviews and issue triage',
          'Maintain contribution for 2+ months'
        ],
        rewardType: 'esim'
      },
      {
        id: 'milestone-intermediate-4',
        title: 'Project Catalyst Proposal',
        description: 'Successfully submit and present Project Catalyst funding proposal',
        targetDate: '2025-06-15',
        completed: false,
        verificationSteps: [
          'Research and validate project idea',
          'Create detailed proposal with budget breakdown',
          'Present to community and gather feedback',
          'Submit proposal for Catalyst voting'
        ],
        rewardType: 'both'
      },
      {
        id: 'milestone-intermediate-5',
        title: 'Developer Mentorship',
        description: 'Mentor junior developers and contribute to community growth',
        targetDate: '2025-07-30',
        completed: false,
        verificationSteps: [
          'Mentor 2+ junior developers',
          'Create educational content or workshops',
          'Participate in developer community events',
          'Help organize local Cardano meetups'
        ],
        rewardType: 'nft'
      }
    ],
    resources: [
      {
        title: 'Advanced MeshJS Patterns',
        type: 'documentation',
        url: 'https://meshjs.dev/guides/advanced',
        description: 'Advanced patterns and best practices for MeshJS development',
        difficulty: 'intermediate'
      },
      {
        title: 'Cardano Improvement Proposals',
        type: 'documentation',
        url: 'https://cips.cardano.org',
        description: 'Stay updated with latest Cardano protocol improvements',
        difficulty: 'advanced'
      },
      {
        title: 'Plutus Pioneer Program',
        type: 'course',
        url: 'https://plutus-pioneer-program.readthedocs.io',
        description: 'Comprehensive smart contract development course',
        difficulty: 'advanced'
      },
      {
        title: 'Cardano Developer Community',
        type: 'tool',
        url: 'https://discord.gg/cardano-developers',
        description: 'Active Discord community for Cardano developers',
        difficulty: 'intermediate'
      }
    ],
    catalystOpportunities: [
      {
        id: 'catalyst-intermediate-1',
        title: 'DeFi & Financial Services',
        category: 'DeFi',
        fundingAmount: '$75,000 - $200,000',
        deadline: '2025-03-01',
        matchScore: 88,
        requirements: ['Proven development experience', 'DeFi expertise', 'Security focus']
      },
      {
        id: 'catalyst-intermediate-2',
        title: 'NFT & Digital Assets',
        category: 'NFTs',
        fundingAmount: '$50,000 - $150,000',
        deadline: '2025-02-15',
        matchScore: 92,
        requirements: ['NFT platform experience', 'Creative vision', 'Technical implementation']
      }
    ],
    bountyOpportunities: [
      {
        id: 'bounty-intermediate-1',
        title: 'Advanced dApp Architecture Guide',
        reward: '800 ADA',
        deadline: '2025-03-15',
        skillsRequired: ['Advanced Cardano Development', 'Architecture Design', 'Technical Writing'],
        description: 'Create comprehensive guide for scalable dApp architecture patterns'
      },
      {
        id: 'bounty-intermediate-2',
        title: 'NFT Marketplace Integration',
        reward: '1200 ADA',
        deadline: '2025-04-30',
        skillsRequired: ['Smart Contracts', 'NFT Standards', 'Frontend Development'],
        description: 'Build reusable NFT marketplace components for the community'
      }
    ],
    beginWalletTips: [
      'Use Begin Wallet for seamless dApp testing and user feedback',
      'Implement Begin Wallet rating system in your applications',
      'Leverage eSIM features for mobile-first dApp experiences',
      'Integrate Begin Wallet metadata for enhanced user profiles'
    ]
  },
  'user_advanced_003': {
    timeline: '12-month',
    milestones: [
      {
        id: 'milestone-advanced-1',
        title: 'Ecosystem Leadership Project',
        description: 'Lead a major infrastructure project that benefits the entire Cardano ecosystem',
        targetDate: '2025-04-01',
        completed: true,
        verificationSteps: [
          'Identify critical ecosystem need',
          'Assemble and lead development team',
          'Secure funding through Catalyst or partnerships',
          'Deliver production-ready solution with documentation'
        ],
        rewardType: 'both'
      },
      {
        id: 'milestone-advanced-2',
        title: 'Research Publication',
        description: 'Publish peer-reviewed research contributing to blockchain and Cardano knowledge',
        targetDate: '2025-06-15',
        completed: true,
        verificationSteps: [
          'Conduct original research in blockchain domain',
          'Write comprehensive research paper',
          'Submit to peer-reviewed conference or journal',
          'Present findings at academic or industry conference'
        ],
        rewardType: 'nft'
      },
      {
        id: 'milestone-advanced-3',
        title: 'Consulting Practice Establishment',
        description: 'Establish successful blockchain consulting practice with multiple clients',
        targetDate: '2025-08-30',
        completed: false,
        verificationSteps: [
          'Develop consulting service offerings',
          'Acquire 3+ enterprise clients',
          'Deliver successful blockchain implementations',
          'Build team of specialized consultants'
        ],
        rewardType: 'esim'
      },
      {
        id: 'milestone-advanced-4',
        title: 'Conference Speaking Circuit',
        description: 'Become recognized speaker at major blockchain and Cardano conferences',
        targetDate: '2025-10-15',
        completed: false,
        verificationSteps: [
          'Submit and get accepted to 3+ major conferences',
          'Deliver high-quality technical presentations',
          'Engage with community through workshops',
          'Build reputation as thought leader'
        ],
        rewardType: 'both'
      },
      {
        id: 'milestone-advanced-5',
        title: 'Ecosystem Governance Participation',
        description: 'Take active leadership role in Cardano ecosystem governance and decision-making',
        targetDate: '2025-12-31',
        completed: false,
        verificationSteps: [
          'Participate in Cardano governance processes',
          'Contribute to protocol improvement proposals',
          'Lead community initiatives and working groups',
          'Mentor next generation of ecosystem leaders'
        ],
        rewardType: 'nft'
      }
    ],
    resources: [
      {
        title: 'Cardano Research Papers',
        type: 'documentation',
        url: 'https://iohk.io/research/',
        description: 'Latest academic research from IOHK and community',
        difficulty: 'advanced'
      },
      {
        title: 'Ouroboros Protocol Specifications',
        type: 'documentation',
        url: 'https://cardano.org/ouroboros/',
        description: 'Deep dive into Cardano\'s consensus protocol',
        difficulty: 'advanced'
      },
      {
        title: 'Enterprise Blockchain Architecture',
        type: 'course',
        url: 'https://enterprise-blockchain.org',
        description: 'Advanced course on enterprise blockchain implementations',
        difficulty: 'advanced'
      },
      {
        title: 'Cardano Foundation Technical Council',
        type: 'tool',
        url: 'https://cardanofoundation.org/technical-council',
        description: 'Participate in high-level technical discussions',
        difficulty: 'advanced'
      }
    ],
    catalystOpportunities: [
      {
        id: 'catalyst-advanced-1',
        title: 'Infrastructure & Scalability',
        category: 'Infrastructure',
        fundingAmount: '$200,000 - $500,000',
        deadline: '2025-03-01',
        matchScore: 95,
        requirements: ['Proven track record', 'Technical leadership', 'Ecosystem impact']
      },
      {
        id: 'catalyst-advanced-2',
        title: 'Research & Development',
        category: 'Research',
        fundingAmount: '$150,000 - $400,000',
        deadline: '2025-02-15',
        matchScore: 89,
        requirements: ['Academic credentials', 'Research experience', 'Publication record']
      }
    ],
    bountyOpportunities: [
      {
        id: 'bounty-advanced-1',
        title: 'Protocol Optimization Research',
        reward: '5000 ADA',
        deadline: '2025-06-30',
        skillsRequired: ['Protocol Design', 'Performance Analysis', 'Academic Writing'],
        description: 'Research and propose optimizations to Cardano protocol performance'
      },
      {
        id: 'bounty-advanced-2',
        title: 'Enterprise Integration Framework',
        reward: '8000 ADA',
        deadline: '2025-08-15',
        skillsRequired: ['Enterprise Architecture', 'Blockchain Integration', 'System Design'],
        description: 'Develop framework for enterprise Cardano blockchain integration'
      }
    ],
    beginWalletTips: [
      'Use Begin Wallet for enterprise client demonstrations',
      'Leverage advanced metadata features for complex use cases',
      'Implement Begin Wallet in consulting project deliverables',
      'Contribute to Begin Wallet ecosystem development'
    ]
  }
};

// Demo Achievements
export const demoAchievements: Record<string, Achievement[]> = {
  'user_beginner_001': [
    {
      id: 'achievement-beginner-1',
      title: 'First Steps in Cardano',
      description: 'Successfully completed Cardano fundamentals assessment and set up first wallet',
      dateEarned: '2025-01-15',
      nftHash: 'nft_1705123456_abc123def',
      verified: true,
      metadata: {
        category: 'Education',
        level: 'Beginner',
        skills: ['Wallet Management', 'Basic Transactions']
      }
    },
    {
      id: 'achievement-beginner-2',
      title: 'Development Environment Master',
      description: 'Successfully configured complete Cardano development environment',
      dateEarned: '2025-01-28',
      nftHash: 'nft_1706234567_def456ghi',
      verified: true,
      metadata: {
        category: 'Development',
        level: 'Beginner',
        skills: ['Environment Setup', 'Tool Configuration']
      }
    }
  ],
  'user_intermediate_002': [
    {
      id: 'achievement-intermediate-1',
      title: 'dApp Developer',
      description: 'Successfully deployed first production dApp on Cardano mainnet',
      dateEarned: '2024-12-10',
      nftHash: 'nft_1702345678_ghi789jkl',
      verified: true,
      metadata: {
        category: 'Development',
        level: 'Intermediate',
        skills: ['Smart Contracts', 'Frontend Development', 'MeshJS']
      }
    },
    {
      id: 'achievement-intermediate-2',
      title: 'NFT Marketplace Creator',
      description: 'Built and launched fully functional NFT marketplace with advanced features',
      dateEarned: '2025-01-05',
      nftHash: 'nft_1704456789_jkl012mno',
      verified: true,
      metadata: {
        category: 'NFTs',
        level: 'Intermediate',
        skills: ['NFT Standards', 'Marketplace Logic', 'User Experience']
      }
    },
    {
      id: 'achievement-intermediate-3',
      title: 'Community Contributor',
      description: 'Made significant contributions to open source Cardano projects',
      dateEarned: '2025-01-20',
      nftHash: 'nft_1705567890_mno345pqr',
      verified: true,
      metadata: {
        category: 'Community',
        level: 'Intermediate',
        skills: ['Open Source', 'Code Review', 'Collaboration']
      }
    }
  ],
  'user_advanced_003': [
    {
      id: 'achievement-advanced-1',
      title: 'Ecosystem Leader',
      description: 'Led major infrastructure project benefiting entire Cardano ecosystem',
      dateEarned: '2024-11-15',
      nftHash: 'nft_1700678901_pqr678stu',
      verified: true,
      metadata: {
        category: 'Leadership',
        level: 'Advanced',
        skills: ['Project Management', 'Team Leadership', 'Infrastructure']
      }
    },
    {
      id: 'achievement-advanced-2',
      title: 'Research Pioneer',
      description: 'Published peer-reviewed research advancing blockchain technology',
      dateEarned: '2024-12-20',
      nftHash: 'nft_1703789012_stu901vwx',
      verified: true,
      metadata: {
        category: 'Research',
        level: 'Advanced',
        skills: ['Academic Research', 'Protocol Design', 'Publication']
      }
    },
    {
      id: 'achievement-advanced-3',
      title: 'Thought Leader',
      description: 'Recognized speaker at major blockchain conferences worldwide',
      dateEarned: '2025-01-10',
      nftHash: 'nft_1704890123_vwx234yzab',
      verified: true,
      metadata: {
        category: 'Leadership',
        level: 'Advanced',
        skills: ['Public Speaking', 'Thought Leadership', 'Community Building']
      }
    },
    {
      id: 'achievement-advanced-4',
      title: 'Enterprise Consultant',
      description: 'Successfully established blockchain consulting practice with enterprise clients',
      dateEarned: '2025-01-25',
      nftHash: 'nft_1706901234_yzab567cde',
      verified: true,
      metadata: {
        category: 'Business',
        level: 'Advanced',
        skills: ['Consulting', 'Enterprise Solutions', 'Business Development']
      }
    }
  ]
};

// Demo Progress Entries
export const demoProgressEntries: Record<string, ProgressEntry[]> = {
  'user_beginner_001': [
    {
      milestoneId: 'milestone-beginner-1',
      timestamp: '2025-01-15T10:30:00Z',
      percentage: 100,
      transactionHash: 'tx_1705123456_progress_001'
    },
    {
      milestoneId: 'milestone-beginner-2',
      timestamp: '2025-01-28T14:45:00Z',
      percentage: 100,
      transactionHash: 'tx_1706234567_progress_002'
    },
    {
      milestoneId: 'milestone-beginner-3',
      timestamp: '2025-02-05T09:15:00Z',
      percentage: 65,
      transactionHash: 'tx_1707345678_progress_003'
    }
  ],
  'user_intermediate_002': [
    {
      milestoneId: 'milestone-intermediate-1',
      timestamp: '2024-12-10T16:20:00Z',
      percentage: 100,
      transactionHash: 'tx_1702456789_progress_004'
    },
    {
      milestoneId: 'milestone-intermediate-2',
      timestamp: '2025-01-05T11:30:00Z',
      percentage: 100,
      transactionHash: 'tx_1704567890_progress_005'
    },
    {
      milestoneId: 'milestone-intermediate-3',
      timestamp: '2025-01-20T13:45:00Z',
      percentage: 80,
      transactionHash: 'tx_1705678901_progress_006'
    },
    {
      milestoneId: 'milestone-intermediate-4',
      timestamp: '2025-02-01T15:10:00Z',
      percentage: 45,
      transactionHash: 'tx_1706789012_progress_007'
    }
  ],
  'user_advanced_003': [
    {
      milestoneId: 'milestone-advanced-1',
      timestamp: '2024-11-15T12:00:00Z',
      percentage: 100,
      transactionHash: 'tx_1700890123_progress_008'
    },
    {
      milestoneId: 'milestone-advanced-2',
      timestamp: '2024-12-20T14:30:00Z',
      percentage: 100,
      transactionHash: 'tx_1703901234_progress_009'
    },
    {
      milestoneId: 'milestone-advanced-3',
      timestamp: '2025-01-10T10:45:00Z',
      percentage: 70,
      transactionHash: 'tx_1705012345_progress_010'
    },
    {
      milestoneId: 'milestone-advanced-4',
      timestamp: '2025-01-25T16:15:00Z',
      percentage: 55,
      transactionHash: 'tx_1706123456_progress_011'
    }
  ]
};

// Helper function to get demo data for a user
export const getDemoDataForUser = (walletAddress: string) => {
  const user = demoUsers.find(u => u.walletAddress === walletAddress);
  if (!user) return null;

  return {
    user,
    assessment: demoAssessments[user.id],
    roadmap: demoRoadmaps[user.id],
    achievements: demoAchievements[user.id] || [],
    progressEntries: demoProgressEntries[user.id] || []
  };
};

// Helper function to get all demo wallet addresses
export const getDemoWalletAddresses = () => {
  return demoUsers.map(user => user.walletAddress);
};