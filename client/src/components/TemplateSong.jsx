import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const TemplateSong = function ({ item }) {
    return (
        <div className="templates__song-item">
            <Link to={`/song/${item.author}/${item.title}`} className="templates__song-item-content">
                <div className="templates__song-item-img">
                        <img src={`../../images/albom/${item.img}.jpg`} alt="" />
                </div>
                <div className="templates__song-text">
                    <p className="templates__song-name">
                        {item.title}
                    </p>
                    <p className="templates__song-author">
                        {item.author}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default TemplateSong