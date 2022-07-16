
import React, { useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import opahImage from '../../assets/opah.png';
import salmonImage from '../../assets/salmon.png';
import bluefishImage from '../../assets/bluefish.png';
import haddockImage from '../../assets/haddock.png';
import cobiaImage from '../../assets/cobia.png';
import spaceImage1 from '../../assets/fish.jpg';

const Fish = () => {
    return (
        <div  className={style.fish}>
        
            <div className={style.title}>
                <h1>Come explore the oceans!</h1>
                <h3>This site offers lots of cool facts about the many fish that inhabit the waters of our world. Read below to learn more!</h3>
            </div>
            <div className={style.fishWrapper}>
                <div className={style.section2}>
                    <h2>Atlantic Salmon</h2>
                    <img className={style.fishImage} src={salmonImage} alt='salmon image' />
                    <p>Information about atlantic salmon from FishWatch</p> 
                </div>
                <div className={style.section3}>  
                    <h2>Bluefish</h2>
                    <img className={style.fishImage} src={bluefishImage} alt='bluefish image' /> 
                    <p>Information about bluefish from FishWatch</p>
                </div>
                <div className={style.section4}>
                    <h2>Cobia</h2>
                    <img className={style.fishImage} src={cobiaImage} alt='cobia image' /> 
                    <p>Information about cobia from Fishwatch</p>
                </div>
                <div className={style.section5}>
                    <h2>Haddock</h2>
                    <img className={style.fishImage} src={haddockImage} alt='haddock image' /> 
                    <p>Information about haddock from FishWatch</p>
                </div>
                <div className={style.section6}>
                    <h2>Opah</h2>
                    <img className={style.fishImage} src={opahImage} alt='opah image' /> 
                    <p>Information about opah from FishWatch</p>
                </div>
            </div>
            <div>
                <button className={style.buttonFish}><a href='https://www.fishwatch.gov/profiles/southeast-profiles' target="_blank">Click Here For More Info</a> </button>
            </div>
        </div>
    );
}

export default Fish;

