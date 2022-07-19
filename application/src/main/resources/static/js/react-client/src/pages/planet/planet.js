import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import earthImage from '../../assets/earth.jpg';
import jupiterImage from '../../assets/jupiter.jpg';
import marsImage from '../../assets/mars.jpg';
import mercuryImage from '../../assets/mercury.jpg';
import saturnImage from '../../assets/saturn.jpg';
import style from './planet.module.scss';

const Planet = () => {

    const [loading, setLoading] = useState(true),
        [planetData, setPlanetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/planet');
            setPlanetData(result.data);
        }

        if (planetData) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !planetData && fetchData();
        }, 1000);
        return () => clearTimeout(timer);

        // eslint-disable-next-line
    }, [planetData]);


    console.log(planetData);




    return (
        <div className={style.planet}>

            <div className={style.title}>
                <div className={style.head}>
                    <h1>Come explore the Solar System with its wonderful planets!</h1>
                </div>
                <div className={style.info}>
                    <h3>This site offers lots of enchanting facts about the planets of the Solar System. Read below to learn more!</h3>
                </div>
            </div>
            <div className={style.planetWrapper}>
                <div className={style.section}>
                    <div className={style.head}>
                        <h2>The Mars</h2>
                    </div>
                    <img className={style.planetImage} src={marsImage} alt='mars image' />
                    <div className={style.info}>
                        <p>Information about the Mars, the red planet from NASA</p>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.head}>
                        <h2>The Jupiter</h2>
                    </div>
                    <img className={style.planetImage} src={jupiterImage} alt='jupiter image' />
                    <div className={style.info}>
                        <p>Information about the Jupiter from NASA</p>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.head}>
                        <h2>The Mercury</h2>
                    </div>
                    <img className={style.planetImage} src={mercuryImage} alt='mercury image' />
                    <div className={style.info}>
                        <p>Information about the Mercury from NASA</p>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.head}>
                        <h2>The Earth</h2>
                    </div>
                    <img className={style.planetImage} src={earthImage} alt='earth image' />
                    <div className={style.info}>
                        <p>Information about the Earth  from NASA</p>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.head}>
                        <h2>The Saturn</h2>
                    </div>
                    <img className={style.planetImage} src={saturnImage} alt='saturn image' />
                    <div className={style.info}>
                        <p>Information about the Saturn  from NASA</p>
                    </div>

                </div>
            </div>
            <div className={style.button}>
                <button className={style.buttonPlanet}><a href='https://www.jpl.nasa.gov/infographics/planet-size-comparison' target="_blank">Click Here For More Info</a> </button>
            </div>
        </div>
    );
}

export default Planet;