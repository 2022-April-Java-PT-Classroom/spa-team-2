import React from 'react';
import style from './jac.module.scss';
import advButton from '../../assets/adventurebtn.jpg';
import jacImage from '../../assets/jac.jpeg';
import jacbackground from '../../assets/jac-bg.jpeg';

               
const Jac = () => {
return (
       
   <div className={style.mystere}>
        <div className={style.container}>

            <div className={style.section1}>
                <h2>Jac's Daily Adventure</h2>
                <a href='' target="_blank"><img src={advButton}  alt='adv btn' /></a> 
            </div>

            
            <div className={style.section2}>
                <h2>Jac Enterprises</h2>
                <a href='http://127.0.0.1:5500/index.html' target="_blank"><img src={jacImage} alt='jac image' /></a> 
            </div>
      </div>
    </div>  
   )
}

export default Jac;