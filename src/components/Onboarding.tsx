import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/components/LanguageContext";
import brainCharacter from "@/assets/brain-character.png";
import { Phone, Mail } from "lucide-react";

interface OnboardingProps {
  onComplete: (userData: UserData) => void;
}

export interface UserData {
  name: string;
  email: string;
  grade: string;
  school: string;
  language: string;
}

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const { t, language, setLanguage } = useLanguage();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    grade: '',
    school: '',
    language: language,
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(userData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return userData.name.trim() !== '' && userData.email.trim() !== '';
      case 2:
        return userData.grade !== '' && userData.school.trim() !== '';
      case 3:
        return userData.language !== '';
      default:
        return false;
    }
  };

  const stepProgress = (step / 3) * 100;

  return (
    <div className="min-h-screen gradient-main flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  num <= step 
                    ? 'bg-white text-primary' 
                    : 'bg-white/30 text-white/70'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="w-full bg-white/30 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-300"
              style={{ width: `${stepProgress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-card">
          {step === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t('onboarding.welcome')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('onboarding.setup')}
              </p>

              <div className="space-y-4 text-left">
                <div>
                  <Label htmlFor="name">{t('onboarding.fullName')}</Label>
                  <Input
                    id="name"
                    placeholder={t('onboarding.fullName.placeholder')}
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('onboarding.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('onboarding.email.placeholder')}
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  {t('onboarding.continueWith')}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t('onboarding.phone')}
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t('onboarding.google')}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t('academic.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('academic.subtitle')}
              </p>

              <div className="space-y-4 text-left">
                <div>
                  <Label>{t('academic.grade')}</Label>
                  <Select onValueChange={(value) => setUserData({...userData, grade: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder={t('academic.grade.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
                        <SelectItem key={grade} value={grade.toString()}>
                          Grade {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="school">{t('academic.school')}</Label>
                  <Input
                    id="school"
                    placeholder={t('academic.school.placeholder')}
                    value={userData.school}
                    onChange={(e) => setUserData({...userData, school: e.target.value})}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {t('language.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('language.subtitle')}
              </p>

              <div className="space-y-3">
                {[
                  { code: 'en', label: t('language.english'), flag: '🇺🇸' },
                  { code: 'hi', label: t('language.hindi'), flag: '🇮🇳' },
                  { code: 'or', label: t('language.odia'), flag: '🇮🇳' },
                  { code: 'ta', label: t('language.tamil'), flag: '🇮🇳' },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setUserData({...userData, language: lang.code});
                    }}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      userData.language === lang.code
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              className={step === 1 ? 'invisible' : ''}
            >
              {t('onboarding.back')}
            </Button>
            
            <Button
              variant="gradient"
              onClick={handleNext}
              disabled={!isStepValid()}
              className="px-8"
            >
              {step === 3 ? t('language.complete') : t('onboarding.next')}
            </Button>
          </div>
        </div>

        {/* Brain Character */}
        <div className="flex justify-center mt-8">
          <img 
            src={brainCharacter} 
            alt="Brain Buddy" 
            className="w-16 h-16 brain-float"
          />
        </div>
      </div>
    </div>
  );
};