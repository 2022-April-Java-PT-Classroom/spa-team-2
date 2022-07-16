import React from 'react';
import style from './style.module.scss';

const HomeScreen = () => {
    return (
    
    <div className={style.mystere}>
        <div className={style.container}>
                
            <div className={style.section1}>
                    <h2>Solar System</h2>
                <iframe width="500" height="315" src="https://www.youtube.com/embed/RJ2bQWH6GCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.section2}>
                    <h2>The Planets</h2>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/ZHAqT4hXnMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={style.section3}>
                <h2>Vertebrate Animals: Fish</h2>
                <iframe width="500" height="315" src="https://www.youtube.com/embed/d1FNJhNB5LA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className={style.section4}>
                <h2>Learn about Fish</h2>
                 <iframe width="500" height="315" src="https://www.youtube.com/embed/-IG4hvEkRUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            
            
            </div>
        </div>
    );
}

export default HomeScreen;
