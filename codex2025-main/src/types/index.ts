export interface User {
  id: string;
  walletAddress: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  technicalSkills: string[];
  interests: string[];
  learningStyle: string;
  preferredCareerPath: string;
  assessmentComplete: boolean;
  roadmapGenerated: boolean;
  catalystGuidanceReceived: boolean;
}

export interface Assessment {
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  technicalSkills: string[];
  interests: string[];
  learningStyle: string;
  preferredCareerPath: string;
  transactionCount: number;
  complexityScore: number;
  nextSteps: string[];
}

export interface Roadmap {
  timeline: '3-month' | '6-month' | '12-month';
  milestones: Milestone[];
  resources: Resource[];
  catalystOpportunities: CatalystOpportunity[];
  bountyOpportunities: BountyOpportunity[];
  beginWalletTips: string[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  completed: boolean;
  verificationSteps: string[];
  rewardType?: 'nft' | 'esim' | 'both';
}

export interface Resource {
  title: string;
  type: 'documentation' | 'tutorial' | 'course' | 'tool';
  url: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface CatalystOpportunity {
  id: string;
  title: string;
  category: string;
  fundingAmount: string;
  deadline: string;
  matchScore: number;
  requirements: string[];
}

export interface BountyOpportunity {
  id: string;
  title: string;
  reward: string;
  deadline: string;
  skillsRequired: string[];
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  dateEarned: string;
  nftHash?: string;
  verified: boolean;
  metadata: {
    category: string;
    level: string;
    skills: string[];
  };
}

export interface PaymentRequest {
  service: 'assessment' | 'roadmap' | 'catalyst';
  amount: number;
  userAddress: string;
}

export interface ProgressEntry {
  milestoneId: string;
  timestamp: string;
  percentage: number;
  transactionHash: string;
}