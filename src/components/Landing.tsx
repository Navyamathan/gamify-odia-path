import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";
import brainCharacter from "@/assets/brain-character.png";
import { Flame, Star, Trophy } from "lucide-react";

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing = ({ onGetStarted }: LandingProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen gradient-main flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* Brain Character */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center brain-float">
            <img 
              src={brainCharacter} 
              alt="Brain Buddy Character" 
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-5xl font-bold text-white mb-4">
          {t('app.title')}
        </h1>
        
        <p className="text-xl text-white/80 mb-12">
          {t('app.subtitle')}
        </p>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-card mb-8">
          <h2 className="text-xl text-gray-700 mb-6">
            {t('landing.ready')}
          </h2>
          
          <Button 
            variant="gradient" 
            size="lg" 
            className="w-full text-lg font-semibold rounded-2xl h-14"
            onClick={onGetStarted}
          >
            {t('landing.getStarted')}
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 text-white/70">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Flame className="w-6 h-6" />
            </div>
            <span className="text-sm">{t('landing.learn')}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="text-sm">{t('landing.achieve')}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Star className="w-6 h-6" />
            </div>
            <span className="text-sm">{t('landing.excel')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};