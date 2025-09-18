import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'or' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  en: {
    // Landing page
    'app.title': 'Brain Buddy',
    'app.subtitle': 'Your AI learning companion for grades 6-12',
    'landing.ready': 'Ready to start your learning journey?',
    'landing.getStarted': 'Get Started',
    'landing.learn': 'Learn',
    'landing.achieve': 'Achieve',
    'landing.excel': 'Excel',
    
    // Onboarding
    'onboarding.welcome': 'Welcome! 👋',
    'onboarding.setup': "Let's get you set up",
    'onboarding.fullName': 'Full Name',
    'onboarding.fullName.placeholder': 'Enter your name',
    'onboarding.email': 'Email',
    'onboarding.email.placeholder': 'your.email@example.com',
    'onboarding.continueWith': 'Or continue with:',
    'onboarding.phone': 'Phone',
    'onboarding.google': 'Google',
    'onboarding.next': 'Next',
    'onboarding.back': 'Back',
    
    // Academic Info
    'academic.title': 'Academic Info 🎓',
    'academic.subtitle': 'Help us personalize your experience',
    'academic.grade': 'Grade Level',
    'academic.grade.placeholder': 'Select your grade',
    'academic.school': 'School Name',
    'academic.school.placeholder': 'Enter your school name',
    
    // Language Preference
    'language.title': 'Language Preference 🌍',
    'language.subtitle': 'Choose your learning language',
    'language.english': 'English',
    'language.hindi': 'Hindi',
    'language.odia': 'Odia',
    'language.tamil': 'Tamil',
    'language.complete': 'Complete Setup',
    
    // Dashboard
    'dashboard.greeting': 'Hi, {name}! 👋',
    'dashboard.ready': 'Ready to learn something new?',
    'dashboard.streak': 'Streak',
    'dashboard.stars': 'Stars',
    'dashboard.coins': 'Coins',
    'dashboard.level': 'Level',
    'dashboard.progress': 'Level Progress',
    'dashboard.subjects': 'Choose Subject',
    'dashboard.math': 'Math',
    'dashboard.science': 'Science',
    'dashboard.technology': 'Technology',
    'dashboard.engineering': 'Engineering',
  },
  hi: {
    // Landing page
    'app.title': 'ब्रेन बडी',
    'app.subtitle': 'कक्षा 6-12 के लिए आपका AI शिक्षा साथी',
    'landing.ready': 'अपनी शिक्षा यात्रा शुरू करने के लिए तैयार हैं?',
    'landing.getStarted': 'शुरू करें',
    'landing.learn': 'सीखें',
    'landing.achieve': 'प्राप्त करें',
    'landing.excel': 'उत्कृष्टता',
    
    // Onboarding
    'onboarding.welcome': 'स्वागत है! 👋',
    'onboarding.setup': 'आइए आपको सेट अप करते हैं',
    'onboarding.fullName': 'पूरा नाम',
    'onboarding.fullName.placeholder': 'अपना नाम दर्ज करें',
    'onboarding.email': 'ईमेल',
    'onboarding.email.placeholder': 'your.email@example.com',
    'onboarding.continueWith': 'या इसके साथ जारी रखें:',
    'onboarding.phone': 'फोन',
    'onboarding.google': 'गूगल',
    'onboarding.next': 'अगला',
    'onboarding.back': 'पीछे',
    
    // Academic Info
    'academic.title': 'शैक्षणिक जानकारी 🎓',
    'academic.subtitle': 'अपने अनुभव को व्यक्तिगत बनाने में हमारी सहायता करें',
    'academic.grade': 'कक्षा स्तर',
    'academic.grade.placeholder': 'अपनी कक्षा चुनें',
    'academic.school': 'स्कूल का नाम',
    'academic.school.placeholder': 'अपने स्कूल का नाम दर्ज करें',
    
    // Language Preference
    'language.title': 'भाषा प्राथमिकता 🌍',
    'language.subtitle': 'अपनी शिक्षा भाषा चुनें',
    'language.english': 'अंग्रेजी',
    'language.hindi': 'हिंदी',
    'language.odia': 'उड़िया',
    'language.tamil': 'तमिल',
    'language.complete': 'सेटअप पूरा करें',
    
    // Dashboard
    'dashboard.greeting': 'नमस्ते, {name}! 👋',
    'dashboard.ready': 'कुछ नया सीखने के लिए तैयार हैं?',
    'dashboard.streak': 'स्ट्रीक',
    'dashboard.stars': 'सितारे',
    'dashboard.coins': 'सिक्के',
    'dashboard.level': 'स्तर',
    'dashboard.progress': 'स्तर प्रगति',
    'dashboard.subjects': 'विषय चुनें',
    'dashboard.math': 'गणित',
    'dashboard.science': 'विज्ञान',
    'dashboard.technology': 'तकनीक',
    'dashboard.engineering': 'इंजीनियरिंग',
  },
  or: {
    // Landing page (Odia)
    'app.title': 'ବ୍ରେନ ବଡି',
    'app.subtitle': 'କକ୍ଷା ୬-୧୨ ପାଇଁ ଆପଣଙ୍କର AI ଶିକ୍ଷା ସାଥୀ',
    'landing.ready': 'ଆପଣଙ୍କର ଶିକ୍ଷା ଯାତ୍ରା ଆରମ୍ଭ କରିବାକୁ ପ୍ରସ୍ତୁତ?',
    'landing.getStarted': 'ଆରମ୍ଭ କରନ୍ତୁ',
    'landing.learn': 'ଶିଖନ୍ତୁ',
    'landing.achieve': 'ସଫଳତା',
    'landing.excel': 'ଉତ୍କର୍ଷତା',
    
    // Onboarding
    'onboarding.welcome': 'ସ୍ୱାଗତ! 👋',
    'onboarding.setup': 'ଆସନ୍ତୁ ଆପଣଙ୍କୁ ସେଟ୍ ଅପ୍ କରିବା',
    'onboarding.fullName': 'ପୂର୍ଣ୍ଣ ନାମ',
    'onboarding.fullName.placeholder': 'ଆପଣଙ୍କର ନାମ ଲେଖନ୍ତୁ',
    'onboarding.email': 'ଇମେଲ',
    'onboarding.email.placeholder': 'your.email@example.com',
    'onboarding.continueWith': 'କିମ୍ବା ଏହା ସହିତ ଚାଲୁ ରଖନ୍ତୁ:',
    'onboarding.phone': 'ଫୋନ',
    'onboarding.google': 'ଗୁଗଲ',
    'onboarding.next': 'ପରବର୍ତ୍ତୀ',
    'onboarding.back': 'ପଛକୁ',
    
    // Academic Info
    'academic.title': 'ଶିକ୍ଷାଗତ ତଥ୍ୟ 🎓',
    'academic.subtitle': 'ଆପଣଙ୍କର ଅଭିଜ୍ଞତାକୁ ବ୍ୟକ୍ତିଗତ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ',
    'academic.grade': 'କକ୍ଷା ସ୍ତର',
    'academic.grade.placeholder': 'ଆପଣଙ୍କର କକ୍ଷା ବାଛନ୍ତୁ',
    'academic.school': 'ବିଦ୍ୟାଳୟର ନାମ',
    'academic.school.placeholder': 'ଆପଣଙ୍କର ବିଦ୍ୟାଳୟର ନାମ ଲେଖନ୍ତୁ',
    
    // Language Preference
    'language.title': 'ଭାଷା ପସନ୍ଦ 🌍',
    'language.subtitle': 'ଆପଣଙ୍କର ଶିକ୍ଷା ଭାଷା ବାଛନ୍ତୁ',
    'language.english': 'ଇଂରାଜୀ',
    'language.hindi': 'ହିନ୍ଦୀ',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.tamil': 'ତାମିଲ',
    'language.complete': 'ସେଟଅପ୍ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ',
    
    // Dashboard
    'dashboard.greeting': 'ନମସ୍କାର, {name}! 👋',
    'dashboard.ready': 'କିଛି ନୂଆ ଶିଖିବାକୁ ପ୍ରସ୍ତୁତ?',
    'dashboard.streak': 'ଧାରା',
    'dashboard.stars': 'ତାରକା',
    'dashboard.coins': 'ମୁଦ୍ରା',
    'dashboard.level': 'ସ୍ତର',
    'dashboard.progress': 'ସ୍ତର ପ୍ରଗତି',
    'dashboard.subjects': 'ବିଷୟ ବାଛନ୍ତୁ',
    'dashboard.math': 'ଗଣିତ',
    'dashboard.science': 'ବିଜ୍ଞାନ',
    'dashboard.technology': 'ପ୍ରଯୁକ୍ତିବିଦ୍ୟା',
    'dashboard.engineering': 'ଇଞ୍ଜିନିୟରିଂ',
  },
  ta: {
    // Landing page (Tamil)
    'app.title': 'பிரைன் பெடி',
    'app.subtitle': 'வகுப்பு 6-12க்கான உங்கள் AI கற்றல் துணை',
    'landing.ready': 'உங்கள் கற்றல் பயணத்தைத் தொடங்க தயாரா?',
    'landing.getStarted': 'தொடங்குங்கள்',
    'landing.learn': 'கற்றல்',
    'landing.achieve': 'சாதனை',
    'landing.excel': 'சிறப்பு',
    
    // Onboarding
    'onboarding.welcome': 'வரவேற்கிறோம்! 👋',
    'onboarding.setup': 'உங்களை அமைக்க அனுமதிக்கவும்',
    'onboarding.fullName': 'முழு பெயர்',
    'onboarding.fullName.placeholder': 'உங்கள் பெயரை உள்ளிடவும்',
    'onboarding.email': 'மின்னஞ்சல்',
    'onboarding.email.placeholder': 'your.email@example.com',
    'onboarding.continueWith': 'அல்லது இதன் மூலம் தொடரவும்:',
    'onboarding.phone': 'தொலைபேசி',
    'onboarding.google': 'கூகல்',
    'onboarding.next': 'அடுத்த',
    'onboarding.back': 'பின்',
    
    // Academic Info
    'academic.title': 'கல்வி தகவல் 🎓',
    'academic.subtitle': 'உங்கள் அனுபவத்தை தனிப்பயனாக்க எங்களுக்கு உதவவும்',
    'academic.grade': 'வகுப்பு நிலை',
    'academic.grade.placeholder': 'உங்கள் வகுப்பை தேர்ந்தெடுக்கவும்',
    'academic.school': 'பள்ளியின் பெயர்',
    'academic.school.placeholder': 'உங்கள் பள்ளியின் பெயரை உள்ளிடவும்',
    
    // Language Preference
    'language.title': 'மொழி விருப்பம் 🌍',
    'language.subtitle': 'உங்கள் கற்றல் மொழியை தேர்ந்தெடுக்கவும்',
    'language.english': 'ஆங்கிலம்',
    'language.hindi': 'இந்தி',
    'language.odia': 'ஒடியா',
    'language.tamil': 'தமிழ்',
    'language.complete': 'அமைவை முழுமையாக்கவும்',
    
    // Dashboard
    'dashboard.greeting': 'வணக்கம், {name}! 👋',
    'dashboard.ready': 'புதிதாக ஏதாவது கற்க தயாரா?',
    'dashboard.streak': 'தொடர்ச்சி',
    'dashboard.stars': 'நட்சத்திரங்கள்',
    'dashboard.coins': 'நாணயங்கள்',
    'dashboard.level': 'நிலை',
    'dashboard.progress': 'நிலை முன்னேற்றம்',
    'dashboard.subjects': 'பாடத்தை தேர்ந்தெடுக்கவும்',
    'dashboard.math': 'கணிதம்',
    'dashboard.science': 'அறிவியல்',
    'dashboard.technology': 'தொழில்நுட்பம்',
    'dashboard.engineering': 'பொறியியல்',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string>): string => {
    let translation = translations[language][key as keyof typeof translations['en']] || key;
    
    // Replace parameters in translation
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};