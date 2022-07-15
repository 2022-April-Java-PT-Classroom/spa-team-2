import React from 'react';
import style from './style.module.scss';

const Footer = () => {
    return (

        <div className={style.footer}>
            <div className={style.msgform} >
            <form action="#">
                <div>
                    <div >Contact Us</div>
                    <div>Email *</div>
                    <input type="email" placeholder="Email Here"required/>
                    <div class="text">Message *</div>
                    <input type="message" placeholder="Message Here" required/>
                </div>
                <div>
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