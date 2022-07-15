import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (

        <div className={style.footer}>
            <div>
                <small> &copy; team3 2022</small>
            </div>
            <div>
                <ul className={style.socialList}>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    
                    <li><a href="email-us">Email</a></li>
                </ul>    
            </div>
                
             
            
        </div>

        
    )
}

export default Footer;