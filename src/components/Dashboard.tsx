import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/LanguageContext";
import { UserData } from "@/components/Onboarding";
import brainCharacter from "@/assets/brain-character.png";
import { Flame, Star, Coins, Trophy, Calculator, Beaker, Cpu, Cog, ChevronRight } from "lucide-react";

interface DashboardProps {
  userData: UserData;
  onSubjectSelect: (subject: string) => void;
}

export const Dashboard = ({ userData, onSubjectSelect }: DashboardProps) => {
  const { t } = useLanguage();

  const gameStats = {
    streak: 7,
    stars: 15,
    coins: 1250,
    level: 12,
    xp: 2450,
    xpToNext: 2950,
  };

  const subjects = [
    {
      id: 'math',
      name: t('dashboard.math'),
      icon: Calculator,
      color: 'bg-blue-500',
      progress: 75,
    },
    {
      id: 'science',
      name: t('dashboard.science'),
      icon: Beaker,
      color: 'bg-green-500',
      progress: 60,
    },
    {
      id: 'technology',
      name: t('dashboard.technology'),
      icon: Cpu,
      color: 'bg-purple-500',
      progress: 45,
    },
    {
      id: 'engineering',
      name: t('dashboard.engineering'),
      icon: Cog,
      color: 'bg-orange-500',
      progress: 30,
    },
  ];

  return (
    <div className="min-h-screen gradient-main p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {t('dashboard.greeting').replace('{name}', userData.name)}
            </h1>
            <p className="text-white/80">
              {t('dashboard.ready')}
            </p>
          </div>
          <img 
            src={brainCharacter} 
            alt="Brain Buddy" 
            className="w-12 h-12 brain-float"
          />
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Flame className="w-5 h-5" />
              <span className="text-sm font-medium">{t('dashboard.streak')}</span>
            </div>
            <div className="text-2xl font-bold">{gameStats.streak}</div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">{t('dashboard.stars')}</span>
            </div>
            <div className="text-2xl font-bold">{gameStats.stars}</div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Coins className="w-5 h-5" />
              <span className="text-sm font-medium">{t('dashboard.coins')}</span>
            </div>
            <div className="text-2xl font-bold">{gameStats.coins}</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">{t('dashboard.level')}</span>
            </div>
            <div className="text-2xl font-bold">{gameStats.level}</div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-card">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {t('dashboard.progress')}
            </h3>
            <span className="text-sm text-gray-600">
              {gameStats.xp}/{gameStats.xpToNext} XP
            </span>
          </div>
          <Progress 
            value={(gameStats.xp / gameStats.xpToNext) * 100} 
            className="h-3"
          />
        </div>

        {/* Subject Selection */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-card">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {t('dashboard.subjects')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              return (
                <button
                  key={subject.id}
                  onClick={() => onSubjectSelect(subject.id)}
                  className="group bg-white rounded-xl border-2 border-gray-100 hover:border-primary/30 p-6 transition-all hover:shadow-lg text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${subject.color} rounded-xl p-3 text-white group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {subject.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {subject.progress}% complete
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <Progress value={subject.progress} className="h-2" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};