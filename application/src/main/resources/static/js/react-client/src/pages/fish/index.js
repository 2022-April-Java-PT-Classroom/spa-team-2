import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fishbackground from '../../assets/fishbackground.jpg';

import style from './fish.module.scss';

const Fish = () => {

    const [loading, setLoading] = useState(true),
        [fishData, setFishData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/fish');
            setFishData(result.data);
        }
        fetchData()
    }, []);

    return (
        <div className={style.fish}>
            

            <div className={style.title}>
                <div className={style.head}>
                    <h1>Come explore the oceans!</h1>
                    <iframe width="800" height="600" src="https://www.youtube.com/embed/r9PeYPHdpNo" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.info}>
                <h3 className={style.h3}>This site offers lots of cool facts about the many fish that inhabit the waters of our world. Read below to learn more!</h3>
                </div>
            </div>
            <div className={style.fishWrapper}>
                {fishData.map(fish =>
                    <div className={style.sections}>
                        <div className={style.head}>
                            <h2>{fish.name}</h2>
                        </div>
                        <img className={style.fishImage} src={fish.image} />
                        <div className={style.info}>
                            <p>{fish.physicalDescription}</p>
                            <p>{fish.location}</p>
                            <p>{fish.biology}</p>
                        </div>
                    </div>
                )}
                
            </div>
            <div className={style.button}>
                <button className={style.buttonFish}><a href='https://www.fishwatch.gov/profiles/southeast-profiles' target="_blank">Click Here For More Info</a> </button>
            </div>
        </div>
    );
}

export default Fish;

