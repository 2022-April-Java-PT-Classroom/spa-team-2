import React from 'react';
import style from './style.module.scss';
import jacImage from '../../assets/jac.jpg';
import jacbackground from '../../assets/jac-bg.jpeg';

               
const Jac = () => {
return (
       
   <div className={style.mystere}>
        <div className={style.container}>
            
            <div className={style.section1}>
                <h2>Jac Enterprises</h2>
                <a href='jac.html' target="_blank"><img src={jacImage} alt='jac image' /></a> 
            </div>
      </div>
    </div>  
   )
}

export default Jac;