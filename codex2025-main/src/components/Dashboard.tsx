import React from 'react';
import { TrendingUp, Brain, MapPin, Target, CheckCircle, Clock, Gift } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

interface DashboardProps {
  onServiceSelect: (serviceId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onServiceSelect }) => {
  const { user, assessment, roadmap, achievements } = useUser();

  if (!user) return null;

  const completedMilestones = roadmap?.milestones.filter(m => m.completed).length || 0;
  const totalMilestones = roadmap?.milestones.length || 0;
  const progressPercentage = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.walletAddress.slice(0, 6)}...{user.walletAddress.slice(-4)}
          </h1>
          <p className="text-gray-600">
            Continue your Cardano career journey with personalized guidance
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Progress</h2>
              
              {roadmap ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-semibold text-gray-900">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-800 to-teal-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{completedMilestones} of {totalMilestones} milestones completed</span>
                    <span>{roadmap.timeline} plan</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No roadmap generated yet</p>
                  <button
                    onClick={() => onServiceSelect('roadmap-generation')}
                    className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                  >
                    Generate Roadmap
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience Level</h3>
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user.experienceLevel === 'advanced' ? 'bg-green-100 text-green-800' :
                  user.experienceLevel === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {user.experienceLevel.charAt(0).toUpperCase() + user.experienceLevel.slice(1)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h3>
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">{achievements.length} earned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-800" />
                </div>
                {user.assessmentComplete ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Clock className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills Assessment</h3>
              <p className="text-gray-600 mb-4">Analyze your on-chain activity</p>
              <button
                onClick={() => onServiceSelect('skills-assessment')}
                disabled={user.assessmentComplete}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  user.assessmentComplete
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-800 text-white hover:bg-blue-900'
                }`}
              >
                {user.assessmentComplete ? 'Completed' : 'Start Assessment'}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-teal-800" />
                </div>
                {user.roadmapGenerated ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Clock className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Roadmap</h3>
              <p className="text-gray-600 mb-4">Get personalized learning path</p>
              <button
                onClick={() => onServiceSelect('roadmap-generation')}
                disabled={!user.assessmentComplete}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  !user.assessmentComplete
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : user.roadmapGenerated
                    ? 'bg-teal-800 text-white hover:bg-teal-900'
                    : 'bg-teal-800 text-white hover:bg-teal-900'
                }`}
              >
                {user.roadmapGenerated ? 'View Roadmap' : 'Generate Roadmap'}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-800" />
                </div>
                {user.catalystGuidanceReceived ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Clock className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Catalyst Guidance</h3>
              <p className="text-gray-600 mb-4">Project Catalyst support</p>
              <button
                onClick={() => onServiceSelect('catalyst-guidance')}
                className="w-full bg-orange-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-900 transition-colors"
              >
                {user.catalystGuidanceReceived ? 'View Guidance' : 'Get Guidance'}
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        {roadmap && (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Milestones</h2>
            <div className="space-y-4">
              {roadmap.milestones
                .filter(m => !m.completed)
                .slice(0, 3)
                .map((milestone) => (
                  <div key={milestone.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      <p className="text-xs text-gray-500 mt-1">Due: {milestone.targetDate}</p>
                    </div>
                    {milestone.rewardType && (
                      <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        {milestone.rewardType === 'both' ? 'NFT + eSIM' : milestone.rewardType.toUpperCase()}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};