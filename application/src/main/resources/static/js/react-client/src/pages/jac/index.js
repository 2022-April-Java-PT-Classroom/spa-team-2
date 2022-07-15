import React from 'react';
import style from './style.module.scss';
import jacImage from '../../assets/jac.jpeg';

               
const Jac = () => {
return (
       
   <div className={style.mystere}>
        <div className={style.container}>
            
            <div className={style.section1}>
                <h2>Jac Enterprises</h2>
                <a href='http://127.0.0.1:5500/index.html' target="_blank"><img src={jacImage} alt='space image' /></a> 
            </div>
      </div>
    </div>  
   )
}

export default Jac;