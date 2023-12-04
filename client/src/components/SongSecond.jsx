import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { get } from '../axios';
import { Link, useParams } from 'react-router-dom';

const SongSecond = function () {
    const { author } = useParams();
    const [song, setSong] = useState([]);
    // const { author, songId } = props.match.params;

    useEffect(() => {
        get(`/song/${author}`)
            .then(res => {
                setSong(res.data.songs)
                // console.log(res.data.songs);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    console.log(song);
    return (
        <>
            <div className="container">
                <div className="block__author">
                    <p className="block__author-title">
                        {author}
                    </p>
                </div>
                {song.map(song => (
                    <div className="templates__song-item">
                        <Link to={`/song/${song.author}/${song.title}`} className="templates__song-item-content">
                            <div className="templates__song-item-img">
                                <img src={`../../images/albom/${song.img}.jpg`} alt="" />
                            </div>
                            <div className="templates__song-text">
                                <p className="templates__song-author">
                                    {song.title}
                                </p>
                                <p className="templates__song-name">
                                    {song.author}
                                </p>
                            </div>
                        </Link>
                    </div>
                )
                )}
            </div>

        </>
    );
}

export default SongSecond