import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../data';

interface PortfolioContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  t: (key: keyof typeof translations['en']) => string;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  // Read theme from local storage or default to dark (since we want a modern premium developer feel)
  const [darkMode, setDarkModeState] = useState<boolean>(() => {
    const saved = localStorage.getItem('shiv-portfolio-theme');
    if (saved) return saved === 'dark';
    return true; // Default is Dark Mode
  });

  // Read language from local storage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('shiv-portfolio-lang');
    return (saved === 'en' || saved === 'np') ? saved : 'en';
  });

  // Synchronize Dark Mode class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('shiv-portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Synchronize Language preference
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('shiv-portfolio-lang', lang);
  };

  const setDarkMode = (dark: boolean) => {
    setDarkModeState(dark);
  };

  // Translation helper function
  const t = (key: keyof typeof translations['en']): string => {
    const section = translations[language];
    return (section[key] || translations['en'][key]) as string;
  };

  return (
    <PortfolioContext.Provider value={{ language, setLanguage, darkMode, setDarkMode, t }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
export { translations };
