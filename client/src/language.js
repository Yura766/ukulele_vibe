import { useState, useEffect } from 'react';

const getBrowserLanguage = () => {
  const browserLanguage = navigator.language.split('-')[0];
  return browserLanguage;
};

export const useLanguage = () => {
  const [locale, setLocale] = useState(localStorage.getItem('lang') || getBrowserLanguage());

  useEffect(() => {
    localStorage.setItem('lang', locale);
  }, [locale]);

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
  };

  return { locale, changeLanguage };
};
