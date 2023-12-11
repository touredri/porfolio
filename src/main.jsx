import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Get the default language from the system
const defaultLanguageWithRegion = navigator.language;

// Extract only the language code (e.g., 'es' from 'es_US')
const defaultLanguage = defaultLanguageWithRegion.split('-')[0];

// Définit la langue dans le localStorage s'il n'y a pas déjà de langue définie
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', defaultLanguage);
  window.location.reload();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
)
