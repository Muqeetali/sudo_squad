import React from 'react';
import { Award, Calendar, ExternalLink, Trophy, Gift, Star, CheckCircle } from 'lucide-react';
import { useUser } from '../contexts/UserContext';

export const AchievementGallery: React.FC = () => {
  const { user, achievements } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <p className="text-gray-600">Please connect your wallet to view achievements</p>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return <Star className="w-6 h-6" />;
      case 'development':
        return <Trophy className="w-6 h-6" />;
      case 'community':
        return <Gift className="w-6 h-6" />;
      case 'leadership':
        return <Award className="w-6 h-6" />;
      case 'research':
        return <CheckCircle className="w-6 h-6" />;
      case 'business':
        return <Star className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return 'from-blue-500 to-blue-700';
      case 'development':
        return 'from-green-500 to-green-700';
      case 'community':
        return 'from-purple-500 to-purple-700';
      case 'leadership':
        return 'from-orange-500 to-orange-700';
      case 'research':
        return 'from-teal-500 to-teal-700';
      case 'business':
        return 'from-red-500 to-red-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const groupedAchievements = achievements.reduce((groups, achievement) => {
    const category = achievement.metadata.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(achievement);
    return groups;
  }, {} as Record<string, typeof achievements>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievement Gallery</h1>
          <p className="text-gray-600">
            Your verified accomplishments and NFT certificates in the Cardano ecosystem
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{achievements.length}</div>
            <div className="text-sm text-gray-600">Total Achievements</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {achievements.filter(a => a.verified).length}
            </div>
            <div className="text-sm text-gray-600">Verified</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {achievements.filter(a => a.nftHash).length}
            </div>
            <div className="text-sm text-gray-600">NFT Certificates</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {Object.keys(groupedAchievements).length}
            </div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
        </div>

        {achievements.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Achievements Yet</h2>
            <p className="text-gray-600 mb-6">
              Complete learning milestones to earn your first achievement and NFT certificate
            </p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Start Learning Journey
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedAchievements).map(([category, categoryAchievements]) => (
              <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(category)} rounded-lg flex items-center justify-center text-white`}>
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
                    <p className="text-sm text-gray-600">{categoryAchievements.length} achievements</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(achievement.metadata.category)} rounded-lg flex items-center justify-center text-white`}>
                          {getCategoryIcon(achievement.metadata.category)}
                        </div>
                        <div className="flex items-center space-x-2">
                          {achievement.verified && (
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                          )}
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(achievement.metadata.level)}`}>
                            {achievement.metadata.level}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{achievement.description}</p>

                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(achievement.dateEarned).toLocaleDateString()}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {achievement.metadata.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {achievement.metadata.skills.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{achievement.metadata.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {achievement.nftHash && (
                        <div className="pt-4 border-t border-gray-200">
                          <a
                            href={`https://cardanoscan.io/transaction/${achievement.nftHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View NFT Certificate</span>
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievement Progress */}
        {achievements.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievement Progress</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => {
                const levelAchievements = achievements.filter(a => 
                  a.metadata.level.toLowerCase() === level.toLowerCase()
                );
                const maxPossible = level === 'Beginner' ? 5 : level === 'Intermediate' ? 8 : 10;
                const percentage = (levelAchievements.length / maxPossible) * 100;

                return (
                  <div key={level} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${getLevelColor(level)}`}>
                      <span className="text-lg font-bold">{levelAchievements.length}</span>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">{level} Level</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          level === 'Beginner' ? 'bg-green-600' :
                          level === 'Intermediate' ? 'bg-yellow-600' : 'bg-red-600'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      {levelAchievements.length} of {maxPossible} achievements
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};