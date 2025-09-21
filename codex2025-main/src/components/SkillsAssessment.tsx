import React, { useState } from 'react';
import { Brain, ArrowRight, CheckCircle, TrendingUp, Target, Star } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { cardanoApi } from '../utils/cardanoApi';
import { Assessment } from '../types';

interface SkillsAssessmentProps {
  onComplete: () => void;
}

export const SkillsAssessment: React.FC<SkillsAssessmentProps> = ({ onComplete }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { user, setAssessment, setUser } = useUser();

  if (!user) return null;

  const handleStartAnalysis = async () => {
    setIsAnalyzing(true);
    
    try {
      const assessment: Assessment = await cardanoApi.analyzeWallet(user.walletAddress);
      setAssessment(assessment);
      
      // Update user with assessment data
      setUser({
        ...user,
        experienceLevel: assessment.experienceLevel,
        technicalSkills: assessment.technicalSkills,
        interests: assessment.interests,
        learningStyle: assessment.learningStyle,
        preferredCareerPath: assessment.preferredCareerPath,
        assessmentComplete: true
      });
      
      setAnalysisComplete(true);
    } catch (error) {
      console.error('Assessment failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (analysisComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
            <p className="text-gray-600">Here's your personalized profile based on your on-chain activity</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Experience Level</h2>
              </div>
              <div className={`inline-block px-4 py-2 rounded-full text-lg font-medium ${
                user.experienceLevel === 'advanced' ? 'bg-green-100 text-green-800' :
                user.experienceLevel === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {user.experienceLevel.charAt(0).toUpperCase() + user.experienceLevel.slice(1)}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-teal-600" />
                <h2 className="text-xl font-semibold text-gray-900">Career Path</h2>
              </div>
              <p className="text-gray-700 font-medium">{user.preferredCareerPath}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {user.technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Star className="w-6 h-6 text-yellow-600" />
              <h2 className="text-xl font-semibold text-gray-900">Learning Style</h2>
            </div>
            <p className="text-gray-700 mb-4">{user.learningStyle}</p>
            <p className="text-gray-600 text-sm">
              Your learning style preference has been identified based on your transaction patterns and interaction history.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={onComplete}
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Continue to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-blue-600 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Wallet</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We're analyzing your transaction history, NFT interactions, DeFi usage, and governance participation to create your personalized profile.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">On-Chain Skills Assessment</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI will analyze your wallet activity to determine your experience level, technical skills, and interests in the Cardano ecosystem.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What We'll Analyze</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Transaction History</h3>
                  <p className="text-sm text-gray-600">Volume, frequency, and complexity of transactions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">NFT Interactions</h3>
                  <p className="text-sm text-gray-600">Minting, trading, and collection patterns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">DeFi Usage</h3>
                  <p className="text-sm text-gray-600">Decentralized finance protocol interactions</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Governance Participation</h3>
                  <p className="text-sm text-gray-600">Voting history and stake pool delegation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Begin Wallet Patterns</h3>
                  <p className="text-sm text-gray-600">eSIM usage and metadata interactions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Staking Behavior</h3>
                  <p className="text-sm text-gray-600">Delegation patterns and rewards history</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <strong>Privacy Note:</strong> We only analyze publicly available on-chain data. No private keys or sensitive information is accessed.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleStartAnalysis}
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Start Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};