import { useTranslation } from 'react-i18next';
import { create } from 'zustand';

interface I18nStore {
  setCurrentLanguage: (language: string) => void;
  currentLanguage: string;
}

export const useI18nStore = create<I18nStore>((set) => ({
  currentLanguage: 'en',
  setCurrentLanguage: (language: string) => {
    const { i18n } = useTranslation() || {};
    i18n?.changeLanguage?.(language);
    set(() => ({ currentLanguage: language }));
  },
}));
