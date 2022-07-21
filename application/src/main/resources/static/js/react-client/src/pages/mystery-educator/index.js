import React from 'react';
import choiceImage from '../../assets/choiceleft.jpg';
import choiceImage1 from '../../assets/choiceright.jpg';
import spaceImage from '../../assets/space.jpg';
import spaceImage1 from '../../assets/fish.jpg';
import spaceImage2 from '../../assets/fish3.jpg';
import spaceImage3 from '../../assets/space1.jpg';
import style from './mystery.module.scss';

const Mystery = () => {
    return (
        <div className={style.mystere}>
            <div className={style.container}>
                
                <div className={style.section1}>
                        <h2><a href='planet'>The Planets</a></h2>
                    <a href='myspace' target="_blank"><img src={spaceImage} alt='space image' /></a> 
                </div>
                    
                <div className={style.section4}>
                    <h2><a href='solar-system'>Explorer</a></h2>
                    <a href='solar-system' target="_blank" alt='solar-system'><img src={spaceImage3} alt='space image' /></a> 
                </div>

                <div className={style.section7}>
                    <h3>Choose Your adventure</h3>
                </div>

                <div className={style.section5}>                   
                    <h4><a href='planet'>NASA SECTION</a>  </h4>
                    <img className={style.img1} src={choiceImage} alt='finger image' /> 
                </div>
                
                <div className={style.section6}>                  
                  <h4><a href='fish'>OCEAN TREASURES</a> </h4>
                    <img className={style.img1} src={choiceImage1} alt='finger image' /> 
                </div>
                    
                <div className={style.section2}>
                    <h2><a href='fish'>Type of fish</a></h2>
                        <a href='fish' target="_blank"><img  src={spaceImage1} alt='fish image' /></a>
                </div>
                    
                <div className={style.section3}>
                    <h2><a href='fishingame'>Go fishing games</a></h2>
                        <a href='fishingame' target="_blank"><img src={spaceImage2} alt='fish image' /></a>
                </div>
                    
            </div>
        </div>
    );
}

export default Mystery;