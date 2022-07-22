import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={style.footer__wrapper}>
        <div className={style.footer}>

            <div>
                <h3> &copy; team2 2022</h3>
            </div>
            <div>
                <ul className={style.socialList}>
                    
                    
                    <li><a href="email-us">Email</a></li>
                </ul>    
            </div>

        </div>
        </div>

        
    )
}

export default Footer;