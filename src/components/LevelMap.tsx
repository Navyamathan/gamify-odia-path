import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowLeft, Star, Lock, Check } from "lucide-react";

interface LevelMapProps {
  subject: string;
  onBack: () => void;
  onLevelSelect: (level: number) => void;
}

export const LevelMap = ({ subject, onBack, onLevelSelect }: LevelMapProps) => {
  const { t } = useLanguage();

  // Mock data for levels - in real app this would come from backend
  const levels = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    completed: i < 8, // First 8 levels completed
    locked: i >= 9,   // Level 9+ locked (only next level unlocked)
    stars: i < 8 ? Math.floor(Math.random() * 3) + 1 : 0,
    topic: `Topic ${i + 1}`,
  }));

  const completedLevels = levels.filter(l => l.completed).length;
  const totalLevels = levels.length;
  const progressPercentage = (completedLevels / totalLevels) * 100;

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'math': return 'from-blue-500 to-blue-600';
      case 'science': return 'from-green-500 to-green-600';
      case 'technology': return 'from-purple-500 to-purple-600';
      case 'engineering': return 'from-orange-500 to-orange-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getLevelPosition = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const isEvenRow = row % 2 === 0;
    
    // Zigzag pattern like Candy Crush
    const adjustedCol = isEvenRow ? col : 2 - col;
    
    return {
      gridColumn: adjustedCol + 1,
      gridRow: row + 1,
    };
  };

  return (
    <div className="min-h-screen gradient-main p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="game"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <h1 className="text-2xl font-bold text-white capitalize">
            {subject}
          </h1>
          
          <div className="w-20" /> {/* Spacer for balance */}
        </div>

        {/* Progress Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-card">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Progress
            </h3>
            <span className="text-sm text-gray-600">
              {completedLevels}/{totalLevels} levels
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Level Map */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-card">
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {levels.map((level, index) => {
              const position = getLevelPosition(index);
              
              return (
                <div
                  key={level.id}
                  style={position}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => !level.locked && onLevelSelect(level.id)}
                    disabled={level.locked}
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg
                      transition-all duration-200 relative
                      ${level.locked 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : level.completed
                        ? `bg-gradient-to-br ${getSubjectColor(subject)} shadow-lg`
                        : 'bg-gradient-to-br from-gray-500 to-gray-600 hover:shadow-lg hover:scale-105'
                      }
                    `}
                  >
                    {level.locked ? (
                      <Lock className="w-6 h-6" />
                    ) : level.completed ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      level.id
                    )}
                    
                    {/* Stars for completed levels */}
                    {level.completed && level.stars > 0 && (
                      <div className="absolute -top-2 -right-2 flex">
                        {Array.from({ length: level.stars }).map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    )}
                  </button>
                  
                  <span className="text-xs text-gray-600 mt-2 text-center">
                    {level.topic}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Level Indicator */}
        {completedLevels < totalLevels && (
          <div className="text-center mt-6">
            <p className="text-white/80 text-sm">
              Complete level {completedLevels + 1} to unlock the next level!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};