// import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    if (lng !== currentLanguage) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div>
      <button onClick={() => changeLanguage('fr')} disabled={currentLanguage === 'fr'}>
        Français
      </button>
      <button onClick={() => changeLanguage('en')} disabled={currentLanguage === 'en'}>
        English
      </button>
    </div>
  );
};

export default LanguageSelector;
