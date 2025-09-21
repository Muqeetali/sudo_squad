import React, { useState } from 'react';
import { MapPin, Clock, Award, ExternalLink, CheckCircle, Trophy, Gift } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import { cardanoApi } from '../utils/cardanoApi';

interface RoadmapGeneratorProps {
  onComplete: () => void;
}

export const RoadmapGenerator: React.FC<RoadmapGeneratorProps> = ({ onComplete }) => {
  const [selectedTimeline, setSelectedTimeline] = useState<'3-month' | '6-month' | '12-month'>('6-month');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);
  const { user, assessment, roadmap, setRoadmap, setUser, updateMilestoneProgress } = useUser();

  if (!user || !assessment) return null;

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      const newRoadmap = await cardanoApi.generateRoadmap(assessment, selectedTimeline);
      setRoadmap(newRoadmap);
      
      setUser({
        ...user,
        roadmapGenerated: true
      });
      
      setGenerationComplete(true);
    } catch (error) {
      console.error('Roadmap generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleMilestoneToggle = async (milestoneId: string, completed: boolean) => {
    updateMilestoneProgress(milestoneId, completed);
    
    if (completed) {
      // Simulate recording progress on-chain
      try {
        await cardanoApi.recordProgress(milestoneId, 100, user.walletAddress);
      } catch (error) {
        console.error('Failed to record progress on-chain:', error);
      }
    }
  };

  if (generationComplete && roadmap) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Personalized Roadmap</h1>
            <p className="text-gray-600">
              A {roadmap.timeline} learning path tailored to your {assessment.experienceLevel} level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Milestones */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Learning Milestones</h2>
                <div className="space-y-4">
                  {roadmap.milestones.map((milestone, index) => (
                    <div
                      key={milestone.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        milestone.completed
                          ? 'border-green-200 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              milestone.completed
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {index + 1}
                            </div>
                            <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                            {milestone.rewardType && (
                              <div className="flex items-center space-x-1">
                                {milestone.rewardType === 'nft' && <Trophy className="w-4 h-4 text-yellow-600" />}
                                {milestone.rewardType === 'esim' && <Gift className="w-4 h-4 text-blue-600" />}
                                {milestone.rewardType === 'both' && (
                                  <>
                                    <Trophy className="w-4 h-4 text-yellow-600" />
                                    <Gift className="w-4 h-4 text-blue-600" />
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{milestone.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{milestone.targetDate}</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm font-medium text-gray-700 mb-2">Verification Steps:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {milestone.verificationSteps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={milestone.completed}
                            onChange={(e) => handleMilestoneToggle(milestone.id, e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            milestone.completed
                              ? 'bg-green-600 border-green-600'
                              : 'border-gray-300 hover:border-green-400'
                          }`}>
                            {milestone.completed && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Resources */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Resources</h3>
                <div className="space-y-3">
                  {roadmap.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{resource.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                          <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                            resource.difficulty === 'advanced' ? 'bg-red-100 text-red-800' :
                            resource.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {resource.difficulty}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-2" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Catalyst Opportunities */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Catalyst Opportunities</h3>
                <div className="space-y-3">
                  {roadmap.catalystOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{opportunity.title}</h4>
                        <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">
                          {opportunity.matchScore}% match
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{opportunity.fundingAmount}</p>
                      <p className="text-xs text-gray-500">Deadline: {opportunity.deadline}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Begin Wallet Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Begin Wallet Integration</h3>
                <div className="space-y-2">
                  {roadmap.beginWalletTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onComplete}
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-teal-600 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Generating Your Roadmap</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Creating a personalized {selectedTimeline} learning path based on your skills assessment and career goals.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Generate Your Career Roadmap</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your assessment, we'll create a personalized learning path with milestones, resources, and opportunities.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Timeline</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { value: '3-month', title: '3 Months', description: 'Fast-track intensive learning', milestones: '3-4 major milestones' },
              { value: '6-month', title: '6 Months', description: 'Balanced pace with deep learning', milestones: '5-6 major milestones' },
              { value: '12-month', title: '12 Months', description: 'Comprehensive skill development', milestones: '8-10 major milestones' }
            ].map((timeline) => (
              <div
                key={timeline.value}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTimeline === timeline.value
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-gray-200 hover:border-teal-300'
                }`}
                onClick={() => setSelectedTimeline(timeline.value as any)}
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{timeline.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{timeline.description}</p>
                  <p className="text-xs text-gray-500">{timeline.milestones}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Your Roadmap Will Include:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">Milestone-based learning objectives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">Curated Cardano resources</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">NFT achievement certificates</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Gift className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">eSIM data rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">Project Catalyst opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-700">On-chain progress tracking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerate}
              className="bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors"
            >
              Generate {selectedTimeline} Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};