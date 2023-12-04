import React, { useState,useEffect } from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const Header = function ({ languageOptions, locale, changeLanguage }) {
    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
    };

    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;
  
    const [isDarkMode, setIsDarkMode] = useState(initialTheme);
  
    const toggleDarkMode = () => {
      const newTheme = !isDarkMode;
      setIsDarkMode(newTheme);
      // Сохраняем новое значение темы в localStorage
      localStorage.setItem('theme', JSON.stringify(newTheme));
    };
  
    useEffect(() => {
      document.documentElement.classList.toggle('light', !isDarkMode);
      document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
  
    return (
        <>
            <div className="page__bg"></div>
            <header className="header">
                <div className="container">
                    <div className="contact">
                        <a className="patreon" href="#">
                            <img src="../../images/patreon-v2-svgrepo-com.svg" alt="" />
                        </a>
                        <div className="tumbler__wrapper" onClick={toggleDarkMode}>
                            <div className="tumbler__light-img">
                                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'>
                                    <g fill='#FFD93B' >
                                        <g className='a'>
                                            <path
                                                d='M7.5 0C7.4 0 7.3 0.1 7.3 0.3L7.3 1.8C7.3 1.9 7.4 2 7.5 2 7.6 2 7.8 1.9 7.8 1.8L7.8 0.3C7.8 0.1 7.6 0 7.5 0Z' />
                                            <path
                                                d='M7.5 13C7.4 13 7.3 13.1 7.3 13.3L7.3 14.8C7.3 14.9 7.4 15 7.5 15 7.6 15 7.8 14.9 7.8 14.8L7.8 13.3C7.8 13.1 7.6 13 7.5 13Z' />
                                            <path
                                                d='M14.8 7.3L13.3 7.3C13.1 7.3 13 7.4 13 7.5 13 7.6 13.1 7.8 13.3 7.8L14.8 7.8C14.9 7.8 15 7.6 15 7.5 15 7.4 14.9 7.3 14.8 7.3Z' />
                                            <path
                                                d='M2 7.5C2 7.4 1.9 7.3 1.8 7.3L0.3 7.3C0.1 7.3 0 7.4 0 7.5 0 7.6 0.1 7.8 0.3 7.8L1.8 7.8C1.9 7.8 2 7.6 2 7.5Z' />
                                            <path
                                                d='M11.6 3.7C11.6 3.7 11.7 3.7 11.7 3.6L13.2 2.2C13.3 2.1 13.3 1.9 13.2 1.8 13.1 1.7 12.9 1.7 12.8 1.8L11.4 3.3C11.3 3.4 11.3 3.5 11.4 3.6 11.4 3.7 11.5 3.7 11.6 3.7Z' />
                                            <path
                                                d='M3.3 11.4L1.8 12.8C1.7 12.9 1.7 13.1 1.8 13.2 1.9 13.2 1.9 13.3 2 13.3 2.1 13.3 2.1 13.2 2.2 13.2L3.6 11.7C3.7 11.6 3.7 11.5 3.6 11.4 3.5 11.3 3.4 11.3 3.3 11.4Z' />
                                            <path
                                                d='M11.7 11.4C11.6 11.3 11.5 11.3 11.4 11.4 11.3 11.5 11.3 11.6 11.4 11.7L12.8 13.2C12.9 13.2 12.9 13.3 13 13.3 13.1 13.3 13.1 13.2 13.2 13.2 13.3 13.1 13.3 12.9 13.2 12.8L11.7 11.4Z' />
                                            <path
                                                d='M2.2 1.8C2.1 1.7 1.9 1.7 1.8 1.8 1.7 1.9 1.7 2.1 1.8 2.2L3.3 3.6C3.3 3.7 3.4 3.7 3.4 3.7 3.5 3.7 3.6 3.7 3.6 3.6 3.7 3.5 3.7 3.4 3.6 3.3L2.2 1.8Z' />
                                            <path
                                                d='M12.6 5.4C12.6 5.4 12.7 5.5 12.8 5.5 12.8 5.5 12.9 5.5 12.9 5.5L13.6 5.2C13.7 5.1 13.8 5 13.7 4.9 13.7 4.7 13.5 4.7 13.4 4.7L12.7 5C12.6 5.1 12.5 5.2 12.6 5.4Z' />
                                            <path
                                                d='M2.4 9.6C2.4 9.5 2.2 9.5 2.1 9.5L1.4 9.8C1.3 9.9 1.2 10 1.3 10.1 1.3 10.2 1.4 10.3 1.5 10.3 1.5 10.3 1.6 10.3 1.6 10.3L2.3 10C2.4 9.9 2.5 9.8 2.4 9.6Z' />
                                            <path
                                                d='M13.6 9.7L12.9 9.4C12.8 9.4 12.7 9.4 12.6 9.6 12.5 9.7 12.6 9.8 12.7 9.9L13.4 10.2C13.5 10.2 13.5 10.2 13.5 10.2 13.6 10.2 13.7 10.1 13.8 10 13.8 9.9 13.7 9.8 13.6 9.7Z' />
                                            <path
                                                d='M1.4 5.3L2.1 5.6C2.1 5.6 2.1 5.6 2.2 5.6 2.3 5.6 2.4 5.5 2.4 5.4 2.5 5.3 2.4 5.2 2.3 5.1L1.6 4.8C1.4 4.8 1.3 4.8 1.2 5 1.2 5.1 1.3 5.2 1.4 5.3Z' />
                                            <path
                                                d='M10 12.7C9.9 12.6 9.8 12.5 9.6 12.6 9.5 12.6 9.5 12.8 9.5 12.9L9.8 13.6C9.8 13.7 9.9 13.7 10 13.7 10.1 13.7 10.1 13.7 10.1 13.7 10.3 13.7 10.3 13.5 10.3 13.4L10 12.7Z' />
                                            <path
                                                d='M5.3 2.5C5.3 2.5 5.3 2.5 5.4 2.4 5.5 2.4 5.5 2.2 5.5 2.1L5.2 1.4C5.1 1.3 5 1.2 4.9 1.3 4.7 1.3 4.7 1.5 4.7 1.6L5 2.3C5.1 2.4 5.2 2.5 5.3 2.5Z' />
                                            <path
                                                d='M5.4 12.6C5.3 12.5 5.2 12.6 5.1 12.7L4.8 13.4C4.8 13.6 4.8 13.7 5 13.8 5 13.8 5 13.8 5.1 13.8 5.2 13.8 5.3 13.7 5.3 13.6L5.6 12.9C5.6 12.8 5.6 12.7 5.4 12.6Z' />
                                            <path
                                                d='M9.7 2.4C9.8 2.4 9.8 2.4 9.9 2.3L10.2 1.6C10.2 1.4 10.2 1.3 10 1.2 9.9 1.2 9.8 1.3 9.7 1.4L9.4 2.1C9.4 2.2 9.4 2.3 9.6 2.4 9.6 2.4 9.6 2.4 9.7 2.4Z' />
                                        </g>
                                        <circle cx='7.5' cy='7.5' r='5' className='a' />
                                        <circle cx='7.5' cy='7.5' r='3.8' fill='%23EDE21B' />
                                    </g>
                                </svg>
                            </div>
                            <div className="tumbler__dark-img">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    width="15px" height="15px" viewBox="0 0 15 15" version="1.1">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Film" transform="translate(-1566.000000, -1086.000000)" fillRule="nonzero">
                                            <g id="Group" transform="translate(1566.000000, 1086.000000)">
                                                <path
                                                    d="M4.4064,11.26584 C8.19456,11.26584 11.26512,8.1948 11.26512,4.40664 C11.26512,2.72808 10.66032,1.19256 9.65952,0.00024 C12.75168,0.99288 14.99088,3.8892 14.99088,7.31112 C14.99088,11.55288 11.55264,14.99112 7.31088,14.99112 C3.88896,14.99112 0.99264,12.75192 8.52651283e-16,9.65976 C1.19232,10.66104 2.72832,11.26584 4.4064,11.26584 Z"
                                                    id="Path" fill="#FFD93B" />
                                                <path
                                                    d="M12.0576,1.28328 C13.0848,2.5884 13.70208,4.23144 13.70208,6.02184 C13.70208,10.2636 10.26384,13.70184 6.02208,13.70184 C4.23168,13.70184 2.58864,13.08456 1.28352,12.05736 C2.68896,13.84152 4.86384,14.99112 7.31136,14.99112 C11.55312,14.99112 14.99136,11.55288 14.99136,7.31112 C14.99136,4.8636 13.84176,2.6892 12.0576,1.28328 Z"
                                                    id="Path" fill="#F4C534" />
                                                <g transform="translate(1.260000, 2.460000)" fill="#FFD83B" id="Path">
                                                    <polygon
                                                        points="2.58384 0.53832 3.37488 2.142 5.14416 2.3988 3.864 3.6468 4.16592 5.40888 2.58384 4.57704 1.00128 5.40888 1.3032 3.6468 0.02304 2.3988 1.79232 2.142" />
                                                    <polygon
                                                        points="7.04592 0.0252 7.45584 0.85656 8.37312 0.98952 7.70928 1.63656 7.86624 2.54952 7.04592 2.11848 6.2256 2.54952 6.38256 1.63656 5.71872 0.98952 6.636 0.85656" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className={isDarkMode ? 'tumbler' : 'tumbler tumbler__active'}></div>
                        </div>
                        {/* lang block */}
                        <select value={locale} onChange={handleLanguageChange}>
                            {languageOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="logo">
                        <img className="logo__img" src="../../images/logo.svg" alt="Logo" />
                    </div>
                    <ul className="nav">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                <FormattedMessage id="home__nav" />
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/chords" className="nav__link">
                                <FormattedMessage id="chords__nav" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

        </>
    );
}

export default Header