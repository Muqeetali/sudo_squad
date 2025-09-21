import React from 'react';
import { TrendingUp, Calendar, CheckCircle, Clock, Award, ExternalLink } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export const ProgressTracker: React.FC = () => {
  const { user, roadmap, progressEntries, achievements } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <p className="text-gray-600">Please connect your wallet to view progress</p>
      </div>
    );
  }

  const completedMilestones = roadmap?.milestones.filter(m => m.completed).length || 0;
  const totalMilestones = roadmap?.milestones.length || 0;
  const progressPercentage = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;

  const recentProgress = progressEntries
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress Tracker</h1>
          <p className="text-gray-600">
            Track your learning journey and milestone achievements on-chain
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Overall Progress</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Learning Path Progress</span>
              <span className="text-sm font-medium text-gray-900">
                {completedMilestones} of {totalMilestones} milestones
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-blue-800 to-teal-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${Math.max(progressPercentage, 8)}%` }}
              >
                {progressPercentage > 15 && (
                  <span className="text-xs font-medium text-white">
                    {Math.round(progressPercentage)}%
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-1">{achievements.length}</div>
              <div className="text-sm text-gray-600">Achievements Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-800 mb-1">{progressEntries.length}</div>
              <div className="text-sm text-gray-600">Progress Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-800 mb-1">
                {roadmap?.timeline || 'N/A'}
              </div>
              <div className="text-sm text-gray-600">Learning Timeline</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Progress</h2>
            
            {recentProgress.length > 0 ? (
              <div className="space-y-4">
                {recentProgress.map((entry, index) => {
                  const milestone = roadmap?.milestones.find(m => m.id === entry.milestoneId);
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        entry.percentage === 100 ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        {entry.percentage === 100 ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {milestone?.title || 'Unknown Milestone'}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Progress: {entry.percentage}%
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
                          </div>
                          <a
                            href={`https://cardanoscan.io/transaction/${entry.transactionHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>View on-chain</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No progress entries yet</p>
                <p className="text-sm text-gray-500 mt-2">
                  Complete milestones to see your progress here
                </p>
              </div>
            )}
          </div>

          {/* Achievement Gallery */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Achievements</h2>
            
            {achievements.length > 0 ? (
              <div className="space-y-4">
                {achievements.slice(0, 5).map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(achievement.dateEarned).toLocaleDateString()}</span>
                          {achievement.verified && (
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        {achievement.nftHash && (
                          <a
                            href={`https://cardanoscan.io/transaction/${achievement.nftHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>NFT</span>
                          </a>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {achievement.metadata.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No achievements yet</p>
                <p className="text-sm text-gray-500 mt-2">
                  Complete milestones to earn your first achievement
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Milestone Timeline */}
        {roadmap && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Milestone Timeline</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="space-y-6">
                {roadmap.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="relative flex items-start space-x-4">
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      milestone.completed
                        ? 'bg-green-600 border-green-600'
                        : 'bg-white border-gray-300'
                    }`}>
                      {milestone.completed ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-sm font-medium text-gray-600">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-medium ${
                          milestone.completed ? 'text-green-800' : 'text-gray-900'
                        }`}>
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-gray-500">{milestone.targetDate}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                      {milestone.rewardType && (
                        <div className="inline-flex items-center space-x-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          <Award className="w-3 h-3" />
                          <span>
                            {milestone.rewardType === 'both' ? 'NFT + eSIM' : milestone.rewardType.toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};