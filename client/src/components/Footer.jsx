import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';

const Footer = function () {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <p className="footer__text">
                        <FormattedMessage id="footer__text"  />
                    </p>
                    <a className="patreon" href="#">
                        <img src="../../images/patreon-v2-svgrepo-com.svg" alt="" />
                    </a>
                    <a href="#" className="email">ukuvibe@gmail.com</a>
                    <div className="footer__sub">© 2023 Ukuvibe.com</div>
                </div>

            </footer>
        </>
    );
}

export default Footer