import React, { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
// import components
import Header from "./components/Header";
import Home from './components/Home';
import Chords from './components/Chords';
import Footer from "./components/Footer";
import Album from './components/Album';
import Song from "./components/Song";

// lang
import { IntlProvider } from 'react-intl';
import { useLanguage } from './language';

import en from './locales/en.json';
import fr from './locales/fr.json';
import ua from './locales/ua.json';
import ru from './locales/ru.json';
import esp from './locales/esp.json';

import SongSecond from './components/SongSecond';


const messages = {
  en,
  fr,
  ua,
  ru,
  esp
};

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'esp', label: 'Spanish' },
  { value: 'fr', label: 'France' },
  { value: 'ua', label: 'Ukraine' },
  { value: 'ru', label: 'Russian' },
];
// lang-end

function App() {
  // lang
  const { locale, changeLanguage } = useLanguage();
  const language = messages[locale] ? locale : 'en'; // Если запрашиваемого языка перевода нет, то используется английский язык по умолчанию
  // lang-end
  return (
    <IntlProvider locale={locale} messages={messages[language]}>
      <div className="body">
        <div className="wrapper">
          <Header languageOptions={languageOptions} locale={locale} changeLanguage={changeLanguage} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chords' element={<Chords />} />
            <Route path='/album/:id' element={<Album />} />
            <Route path='/song/:author' element={<SongSecond />} />
            <Route path='/song/:author/:title' element={<Song />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
