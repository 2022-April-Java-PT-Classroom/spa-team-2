import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div class="email">
            <form action="#">
                <div class="email">
                    <div class="text">Email *</div>
                    <input type="email" required/>
                </div>
                <div className={style.msg}>
                    <div class="text">Message *</div>
                    <input type="email" required/>
                    <textarea rows="1" cols="15" required></textarea>
                </div>
                <div class="btn">
                    <button type='send'>Send</button>
                </div>
            </form>
            <small> &copy; team3 2022</small>
        </div>
       
            <ul className={style.socialList}>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Email</li> 
            </ul>
        </div>

        
    )
}

export default Footer;