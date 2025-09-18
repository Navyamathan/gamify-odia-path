import { useState } from "react";
import { LanguageProvider } from "@/components/LanguageContext";
import { Landing } from "@/components/Landing";
import { Onboarding, UserData } from "@/components/Onboarding";
import { Dashboard } from "@/components/Dashboard";
import { LevelMap } from "@/components/LevelMap";

type AppState = 'landing' | 'onboarding' | 'dashboard' | 'levelMap';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const handleGetStarted = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setAppState('dashboard');
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setAppState('levelMap');
  };

  const handleBackToDashboard = () => {
    setAppState('dashboard');
  };

  const handleLevelSelect = (level: number) => {
    // This would navigate to the actual lesson/game
    console.log(`Selected level ${level} in ${selectedSubject}`);
  };

  return (
    <LanguageProvider>
      {appState === 'landing' && (
        <Landing onGetStarted={handleGetStarted} />
      )}
      
      {appState === 'onboarding' && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}
      
      {appState === 'dashboard' && userData && (
        <Dashboard 
          userData={userData} 
          onSubjectSelect={handleSubjectSelect}
        />
      )}
      
      {appState === 'levelMap' && (
        <LevelMap 
          subject={selectedSubject}
          onBack={handleBackToDashboard}
          onLevelSelect={handleLevelSelect}
        />
      )}
    </LanguageProvider>
  );
};

export default Index;
