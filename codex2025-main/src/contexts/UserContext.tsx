import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Assessment, Roadmap, Achievement, ProgressEntry } from '../types';
import { getDemoDataForUser } from '../data/demoData';

interface UserContextType {
  user: User | null;
  assessment: Assessment | null;
  roadmap: Roadmap | null;
  achievements: Achievement[];
  progressEntries: ProgressEntry[];
  setUser: (user: User | null) => void;
  setAssessment: (assessment: Assessment | null) => void;
  setRoadmap: (roadmap: Roadmap | null) => void;
  addAchievement: (achievement: Achievement) => void;
  addProgressEntry: (entry: ProgressEntry) => void;
  updateMilestoneProgress: (milestoneId: string, completed: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([]);

  const addAchievement = (achievement: Achievement) => {
    setAchievements(prev => [...prev, achievement]);
  };

  const addProgressEntry = (entry: ProgressEntry) => {
    setProgressEntries(prev => [...prev, entry]);
  };

  const updateMilestoneProgress = (milestoneId: string, completed: boolean) => {
    if (!roadmap) return;
    
    setRoadmap(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        milestones: prev.milestones.map(milestone => 
          milestone.id === milestoneId 
            ? { ...milestone, completed }
            : milestone
        )
      };
    });
  };

  // Load demo data when user is set
  const setUserWithDemoData = (newUser: User | null) => {
    setUser(newUser);
    
    if (newUser) {
      const demoData = getDemoDataForUser(newUser.walletAddress);
      if (demoData) {
        setAssessment(demoData.assessment);
        setRoadmap(demoData.roadmap);
        setAchievements(demoData.achievements);
        setProgressEntries(demoData.progressEntries);
      }
    } else {
      // Clear all data when user is null
      setAssessment(null);
      setRoadmap(null);
      setAchievements([]);
      setProgressEntries([]);
    }
  };

  const value = {
    user,
    assessment,
    roadmap,
    achievements,
    progressEntries,
    setUser: setUserWithDemoData,
    setAssessment,
    setRoadmap,
    addAchievement,
    addProgressEntry,
    updateMilestoneProgress,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};