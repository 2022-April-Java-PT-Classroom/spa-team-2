import React from 'react';
import style from './style.module.scss';


const Footer = () => {
    return (
        <div className={style.footer}>
            <small> &copy; team3 2022</small>
            <ul className={style.socialList}>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email</li>
                
            </ul>
        </div>
    )
}

export default Footer;