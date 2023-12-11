import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFr from './locales/fr.json';
import translationEn from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: translationFr,
      },
      en: {
        translation: translationEn,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
