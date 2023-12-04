import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { get } from '../axios';
import { useParams } from 'react-router-dom';
import TemplateSong from './TemplateSong';

const Album = function () {
    const { id } = useParams();
    const [album, setAlbum] = useState([])
    const [songs, setSongs] = useState()


    const { title, img, sub, songId } = album

    console.log(songs);
    useEffect(() => {
        get(`/album/${id}`)
            .then(res => {
                setAlbum(res.data.album)
                setSongs(res.data.songs)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    return (
        <>
            <div class="container">
                <div class="block__author">
                    <p class="block__author-title">
                        {title}
                    </p>
                </div>

                {songs && songs.map((item) => (
                    <TemplateSong key={item.title} item={item} />
                ))}

            </div>

        </>
    );
}

export default Album