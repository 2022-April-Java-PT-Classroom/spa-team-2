import React from 'react';
import style from './style.module.scss';
import spaceImage from '../../assets/space.jpg';
import spaceImage3 from '../../assets/space1.jpg';
import spaceImage1 from '../../assets/fish.jpg';
import spaceImage2 from '../../assets/fish3.jpg';
import choiceImage from '../../assets/choice.jpg';
import choiceImage1 from '../../assets/choice1.jpg';



const Mystery = () => {
    return (
        <div className={style.mystere}>
        <div className={style.container}>
            
            <div className={style.section1}>
                <h2>My space</h2>
                <a href='https://spaceplace.nasa.gov/menu/play/' target="_blank"><img src={spaceImage} alt='space image' /></a> 
            </div>
            <div className={style.section4}>
                <h2>Explorer</h2>
                <a href='https://nasa.gov/' target="_blank" rel="noreferrer"><img src={spaceImage3} alt='space image' /></a> 
            </div>
            <div className={style.section5}>
                
                <h2>NASA</h2>
                <img src={choiceImage} alt='finger image' /> 
                <h4><em>Or</em></h4>
                <h2>OCEAN TREASURES</h2>
                <img src={choiceImage1} alt='finger image' /> 
            </div>
            <div className={style.section2}>
                    <h2>Type of fish</h2>
                     <a href='fish' target="_blank"><img  src={spaceImage1} alt='fish image' /></a>
                {/* <a href='https://www.fishwatch.gov/' target="_blank"><img src={spaceImage1} alt='fish image' /></a> */}
            </div>
            <div className={style.section3}>
                <h2>Go fishing</h2>
                <a href='https://www.fishwatch.gov/profiles/southeast-profiles'><img src={spaceImage2} alt='fish image' /></a>
            </div>
            </div>
        </div>
    );
}

export default Mystery;