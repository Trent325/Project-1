import React from 'react';
import style from './Footer.module.scss';

const Footer: React.FC =() =>{

    return(
        <div>
            <div className = {style.FooterParent}>
                <div className={style.footerCol}>
                    <span className = {style.FootLogo}>
                        <img src = "/boatLogo.png" alt = "Bass Lines Boat Logo"></img>
                        another button
                    </span>
                    <span className = {style.fbLogo}>
                        <a href = "https://www.facebook.com/Basslines.Sportfishing.charters/"><img src="/Facebook-logo.png"></img></a>
                        also a button
                    </span>
                    <span className = {style.fbLogo}>
                        <a href = "https://www.instagram.com/basslines.sportfishing/?hl=en"><img src="/instalogo.png"></img></a>
                        this  button
                    </span>
                </div>
                <div className={style.footerCol}>
                    <span className = {style.contact}>
                        Contact us : <a href="tel:12019066847">(201)-906-6847</a>
                              Thanks For visting
                    </span>
                </div>
            </div>
        </div>

    );

};

export default Footer;