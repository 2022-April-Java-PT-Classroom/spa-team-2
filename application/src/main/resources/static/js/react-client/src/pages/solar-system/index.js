import React from 'react';
import style from './space.module.scss';
import solarImage from '../../assets/solar.png';

const SolarSystem = () => {
    return (
        <div className={style.nasa}>
            <div className={style.space}>
                <h1>10 facts about the solar sytem</h1>
                <img className={style.img} src={solarImage} alt='solar system image' /><br></br>
                1. Everything in the Solar System revolves around the Sun. The Sun is a star – a massive ball of hot gas that gives off light and heat.<br></br>
                2. There are eight planets that orbit around the Sun.<br></br>
                3. The closest planet to the Sun is Mercury, and the farthest away is Neptune.<br></br>
                4. The biggest planet is Jupiter, and the smallest planet is Mercury.<br></br>
                5. The Earth is the only planet that we know has creatures living on it.<br></br>
                6. The Earth rotates as it orbits the Sun. It takes one day to complete a rotation.<br></br>
                7. It takes 365 days for the Earth to complete one circuit around the Sun. We call this a year.<br></br>
                8. The Sun is just one of hundreds of billions of stars in the galaxy that we live in, which is called the Milky Way. The whole Universe has at least 100 billion galaxies in it.<br></br>
                9. You are held onto the surface of the Earth by a force called gravity. This is the same force that keeps the Earth and the other planets orbiting around the Sun.<br></br>
                10. Not everything in the Solar system orbits directly around the Sun. The Moon orbits around the Earth.<br></br>
                
                <button className={style.buttonFish}><a href='https://solarsystem.nasa.gov/kids/do-it-yourself/?page=0&per_page=40&order=created_at+desc&search=&category=139' target="_blank">Learn more here...</a></button>
            </div>
            <div>
            <h1>Learning section</h1>
                <button className={style.buttonFish}><a href='https://kids.nationalgeographic.com/games/action-adventure/article/space-explorer' target="_blank">Find out more here...</a></button>
            </div>
            
        </div>
    );
}
export default SolarSystem;