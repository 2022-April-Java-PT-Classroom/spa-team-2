
import React, { useState } from 'react';
import axios from 'axios';
import style from './fish.module.scss';
import opahImage from '../../assets/opah.png';
import salmonImage from '../../assets/salmon.png';
import bluefishImage from '../../assets/bluefish.png';
import haddockImage from '../../assets/haddock.png';
import cobiaImage from '../../assets/cobia.png';
import spaceImage1 from '../../assets/fish.jpg';
import fishbackground from '../../assets/fishbackground.jpg';
const Fish = () => {
    return (
        <div  className={style.fish}>
        
            <div className={style.title}>
                <div className={style.head}>
                <h1>Come explore the oceans!</h1>
                </div>
                <div className={style.info}>
                <h3>This site offers lots of cool facts about the many fish that inhabit the waters of our world. Read below to learn more!</h3>
                </div>
            </div>
            <div className={style.fishWrapper}>
                <div className={style.section}>
                <div className={style.head}>
                    <h2>Atlantic Salmon</h2>
                    </div>
                    <img className={style.fishImage} src={salmonImage} alt='salmon image' />
                    <div className={style.info}>
                    <p>Information about atlantic salmon from FishWatch</p> 
                    </div>
                </div>
                <div className={style.section}> 
                <div className={style.head}>
                    <h2>Bluefish</h2>
                </div>
                    <img className={style.fishImage} src={bluefishImage} alt='bluefish image' /> 
                    <div className={style.info}>
                    <p>Information about bluefish from FishWatch</p>
                    </div>
                </div>
                <div className={style.section}>
                <div className={style.head}>
                    <h2>Cobia</h2>
                    </div>
                    <img className={style.fishImage} src={cobiaImage} alt='cobia image' /> 
                    <div className={style.info}>
                    <p>Information about cobia from Fishwatch</p>
                    </div>
                </div>
                <div className={style.section}>
                <div className={style.head}>
                    <h2>Haddock</h2>
                    </div>
                    <img className={style.fishImage} src={haddockImage} alt='haddock image' /> 
                    <div className={style.info}>
                    <p>Information about haddock from FishWatch</p>
                    </div>
                </div>
                <div className={style.section}>
                <div className={style.head}>
                    <h2>Opah</h2>
                </div>
                    <img className={style.fishImage} src={opahImage} alt='opah image' /> 
                    <div className={style.info}>
                    <p>Information about opah from FishWatch</p>
                    </div>
                </div>
            </div>
            <div className={style.button}>
                <button className={style.buttonFish}><a href='https://www.fishwatch.gov/profiles/southeast-profiles' target="_blank">Click Here For More Info</a> </button>
            </div>
        </div>
    );
}

export default Fish;

