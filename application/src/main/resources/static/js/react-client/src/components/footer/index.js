import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={style.footer__wrapper}>
        <div className={style.footer}>

            <div>
                <small> &copy; team3 2022</small>
            </div>
            <div>
                <ul className={style.socialList}>
                    <li><NavLink to={'/comment'}>Comment</NavLink></li>
                    
                    <li><a href="email-us">Email</a></li>
                </ul>    
            </div>

        </div>
        </div>

        
    )
}

export default Footer;