import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { get } from '../axios';
import { Link, useParams } from 'react-router-dom';
import SkeletSongInfo from './SkeletSongInfo';
const Song = function () {
    //info
    const { title, author } = useParams();
    const [song, setSong] = useState([]);
    const [strumming, setStrumming] = useState([]);
    const [chords, setChords] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // text
    const [text, setText] = useState();
    const [textSize, setTextSize] = useState(16);
    const [textLineHeight, setLineHeight] = useState(20);
    const [textMarginBottom, setTextMarginBottom] = useState(20);
    const [countSizeText, setCountSizeText] = useState(5);

    // sped
    const [speed, setSpeed] = useState(0);



    useEffect(() => {
        get(`/song/${author}/${title}?`)
            .then(res => {
                setSong(res.data)

                // №1
                const pattern1 = /\/([^\/]+)\\/g;
                const replacement1 = '<span><span>$1</span></span>';
                const replacedText1 = res.data.text.replace(pattern1, replacement1);

                // // №2
                const pattern2 = /\/bg([^\/]+)bg\//g;
                const replacement2 = '<div class="song__text-bg">$1</div>';
                const replacedText2 = replacedText1.replace(pattern2, replacement2);

                setText(replacedText2)

                // const arrayStrumming = res.song.strumming.split("");
                const arrayStrumming = res.data.strumming.split("");
                const arrayChords = res.data.chords.split(" ");

                setStrumming(arrayStrumming)
                setChords(arrayChords)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    // text
    const [spanColor, setSpanColor] = useState('red');


    const inc = () => {
        if (countSizeText >= 10) {
            return
        }
        setTextSize(textSize + 1)
        setLineHeight(textLineHeight + 1)
        setTextMarginBottom(textMarginBottom + 2)
        setCountSizeText(countSizeText + 1)
    }
    const dec = () => {
        if (countSizeText <= 0) {
            return
        }
        setTextSize(textSize - 1)
        setLineHeight(textLineHeight - 1)
        setTextMarginBottom(textMarginBottom - 2)
        setCountSizeText(countSizeText - 1)
    }

    // speed
    useEffect(() => {
        let scrollInterval;

        if (speed === 1) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1); // горизонтальные и вертикальные инкременты скролла
            }, 150);
        } else if (speed === 2) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1);
            }, 100);
        } else if (speed === 3) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1);
            }, 75);
        } else if (speed === 4) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1);
            }, 50);
        } else if (speed === 5) {
            scrollInterval = setInterval(() => {
                window.scrollBy(0, 1);
            }, 25);
        }
        return () => {
            clearInterval(scrollInterval);
        };
    }, [speed]);

    const increaseSpeed = () => {
        if (speed < 5) {
            //     setSpeed((prevSpeed) => prevSpeed - 1);
            setSpeed((prevSpeed) => prevSpeed + 1);
        }
    };

    const decreaseSpeed = () => {
        if (speed > 0) {
            setSpeed((prevSpeed) => prevSpeed - 1);
        }
    };
    console.log(song.views);

    return (
        <>
            <section className="song__wrapper">
                <div className="container">
                    <div className="song__container">
                        {isLoading ?
                            <SkeletSongInfo className="about__song" />
                            :
                            <div className="about__song">
                                <div className="about__song-img">
                                    <img src={`../../images/albom/${song.img}.jpg`} alt="" />
                                </div>
                                <div className="about__song-info">
                                    <div className="about__song-title--block">
                                        <h2 className="about__song-title">
                                            {song.title}
                                        </h2>
                                        <p className="about__song-title--hr">—</p>
                                        <Link to={`/song/${song.author}`} className="about__song-author">
                                            {song.author}
                                        </Link>
                                    </div>
                                    <div className="about__song-strumming--block">
                                        <div className="about__song-strumming--text">Бой</div>
                                        <div className="about__song-strumming">
                                            {strumming.map((e, index) => {
                                                if (e == '↓') {
                                                    return (
                                                        <div className='strumming__arrow' key={index}>
                                                            <svg viewBox="0 0 24 24" transform="rotate(180)"><path d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z" style={{ fill: '#ff891a' }} data-name="Up" /></svg>
                                                        </div>
                                                    );
                                                } else if (e == '↑') {
                                                    return <div className='strumming__arrow' key={index}>
                                                        <svg viewBox="0 0 24 24"><path d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z" style={{ fill: '#ff891a' }} data-name="Up" /></svg>
                                                    </div>
                                                } else if (e == 'x') {
                                                    return <div className='strumming__arrow' key={index}>
                                                        <svg viewBox="0 0 24 24" transform="rotate(180)"><path d="m19.707 9.293-7-7a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 5 11h3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11h3a1 1 0 0 0 .707-1.707z" style={{ fill: '#ff891a' }} data-name="Up" /></svg>
                                                    </div>
                                                } else {
                                                    return (
                                                        <div style={{ marginRight: '10px' }} key={index}>{e}</div>
                                                    );
                                                }
                                            })}

                                        </div>
                                    </div>
                                    <div className="about__song-chords--block">
                                        <div className="about__song-chords--text">Акорди</div>
                                        <div className="about__song-chords">
                                            {
                                                chords.map((item) => (
                                                    <div key={item}>
                                                        <img style={{ width: '50px', marginBottom: '10px', marginRight: '10px' }} src={`../../images/chords/${item}.svg`} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {/* Text */}
                        {React.createElement('p', { className: `song__text`, style: { fontSize: `${textSize}px`, lineHeight: `${textLineHeight}px`, marginBottom: `${textMarginBottom}px` }, dangerouslySetInnerHTML: { __html: text } })}

                    </div>
                    <div className="song__config sticky">
                        <div className="auto__scroll">
                            <p className="auto__scroll-text">
                                <FormattedMessage id="auto__scroll" />
                            </p>
                            <div className="config__settings">
                                <button className="scroll__speed-minus" onClick={decreaseSpeed}>-</button>
                                <div className="scroll__speed-score">{speed}</div>
                                <button className="scroll__speed-plus" onClick={increaseSpeed}>+</button>
                            </div>
                        </div>
                        <div className="text__size">
                            <p className="text__size-text">
                                <FormattedMessage id="text__size" />
                            </p>
                            <div className="config__settings">
                                <button className="text__size-minus" onClick={dec} >-</button>
                                <div className="text__size-score">{countSizeText}</div>
                                <button className="text__size-plus" onClick={inc}>+</button>
                            </div>
                        </div>
                        {song.video
                            ?
                            <div className="song__youtube">
                                <iframe width="330" height="215" src={`${song.video}`} title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            </div>
                            :
                            <div className="song__youtube"></div>
                        }
                    </div>
                </div>

            </section>
        </>
    );
}

export default Song