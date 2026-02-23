import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
    detection: {
      convertDetectedLanguage: (lng) => {
        return lng.split('-')?.[0]; // Convert 'en-US' to 'en', 'pt-BR' to 'pt', etc.
      },
    },
  });

export default i18n;
