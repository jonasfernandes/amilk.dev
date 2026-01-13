import { useTranslation } from 'react-i18next';
import { createContext, useContext, useState } from 'react';

interface I18NContextType {
  changeLanguage: (language: string) => void;
  currentLanguage: string;
}

const I18NContext = createContext<I18NContextType>({
  changeLanguage: () => {},
  currentLanguage: 'en',
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation() || {};
  const [currentLanguage, setCurrentLanguage] = useState(i18n?.language || 'en');
  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    i18n?.changeLanguage?.(language);
  };
  return (
    <I18NContext.Provider value={{ changeLanguage, currentLanguage }}>
      {children}
    </I18NContext.Provider>
  );
};

export function useI18nContext() {
  const context = useContext(I18NContext);
  if (context === undefined) {
    throw new Error('useI18nContext must be used within a I18nProvider');
  }
  return context;
}
