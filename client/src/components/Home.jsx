import { useState, useEffect } from 'react';
import { get } from '../axios';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import TemplateSong from './TemplateSong';
import SkeletAlbum from './SkeletAlbum';
import SkeletPopular from './SkeletPopular';
import SkeletTemplateSong from './SkeletTemplateSong'

const Home = function () {
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(12);
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({});
    const [btnLoad, setBtnLoad] = useState(false);


    useEffect(() => {
        get('/')
            .then(res => {
                setData(res.data)
                setSongs(res.data.songsNew);
                console.log(res.data.songsNew);
            }).then(res => {
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    const { albums, songsPopular, pageSize } = data

    const loadMoreSongs = async () => {
        try {
            const response = await get(`/api/songs?page=${page}&pageSize=12`);
            const newSongs = response.data.songs;
            console.log(newSongs);


            setSongs(prevSongs => [...prevSongs, ...newSongs]);
            setPage(prevPage => prevPage + 12);
        } catch (error) {
            console.error('Error loading more songs:', error);
        }
    };
    return (
        <>
            <section className="popular__albums">
                <div className="container">

                    <h2 className="section__title">
                        <FormattedMessage id="collections__section__text" />
                    </h2>
                    <div className="albums__container">
                        {
                            isLoading
                                ?
                                [...new Array(2)].map(() => <SkeletAlbum className="album__item" />)
                                :
                                albums && albums.map(item => (
                                    <Link key={item.url} to={`/album/${item.url}`} className="album__item">
                                        <div className="album__item-img">
                                            <img src={`./images/albom/${item.img}`} alt="" />
                                        </div>
                                        <p className="album__item-text">
                                            {item.sub}
                                        </p>
                                    </Link>
                                ))
                        }
                    </div>
                </div>
            </section>
            <section className="popular__songs">
                <div className="container">
                    <h2 className="section__title">
                        <FormattedMessage id="popular__section__text" />
                    </h2>
                    <div className="popular__songs-container">
                        {
                            isLoading ?
                                [...new Array(9)].map(() => <SkeletPopular className="popular__songs-item" />)

                                :
                                songsPopular && songsPopular.map(item => (
                                    <Link key={item.video} to={`/song/${item.author}/${item.title}`} className="popular__songs-item">
                                        <div className="popular__songs-img">
                                            <img src={`./images/albom/${item.img}.jpg`} alt="" />
                                        </div>
                                        <p className="popular__songs-author">
                                            {item.title}
                                        </p>
                                        <p className="popular__song-name">
                                            {item.author}
                                        </p>
                                    </Link>
                                ))}
                    </div>
                </div>
            </section>
            <section className="templates__songs">
                <div className="container">
                    <h2 className="section__title">
                        <FormattedMessage id="new__section__text" />
                    </h2>
                    <div className="templates__songs__container">
                        {
                            isLoading ?
                                [...new Array(12)].map(() => <SkeletTemplateSong className="templates__song-item" />)

                                :

                                songs && songs.map(item => (
                                    <TemplateSong key={item.title} item={item} />
                                ))
                        }
                    </div>

                    {(page <= 12) ?
                        <button className="load__more-btn " id={btnLoad ? 'load-more-btn' : ''} onClick={() => { loadMoreSongs(); setBtnLoad(true); }}>
                            <FormattedMessage id="show__more" />
                        </button>
                        : ''
                    }

                </div>

            </section >
        </>
    );
}

export default Home