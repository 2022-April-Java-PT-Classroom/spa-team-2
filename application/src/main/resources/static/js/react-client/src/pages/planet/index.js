import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import solarSystemBackground from '../../assets/solarSystemBackground.jpg';
import style from './planet.module.scss';

const Planet = () => {

    const [loading, setLoading] = useState(true),
        [planetData, setPlanetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios.get('/api/planet');
            setPlanetData(result.data);
        }
        fetchData()
    }, []);

    return (
        <div className={style.planet}>
            

            <div className={style.title}>
                <div className={style.head}>
                    <h1>Come explore the planets of the Solar system!</h1>
                     
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/RJ2bQWH6GCM" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.info}>
                <h3 className={style.h3}>This site offers lots of cool facts about the Solar System and its'
                 planets. Read below to learn more!</h3>
                </div>
            </div>
            <div className={style.planetWrapper}>
                {planetData.map(planet =>
                    <div className={style.sections}>
                        <div className={style.head}>
                            <h2>{planet.name}</h2>
                        </div>
                        <img className={style.planetImage} src={planet.image} />
                        <div className={style.info}>
                            <p>{planet.description}</p>
                            <p>{planet.shape}</p>
                           
                        </div>
                    </div>
                )}
                
            </div>
            <div className={style.button}>
                <button className={style.buttonPlanet}><a href='https://solarsystem.nasa.gov/planets/overview/' target="_blank">Click Here For More Info</a> </button>
            </div>
        </div>
    );
}

export default Planet;

