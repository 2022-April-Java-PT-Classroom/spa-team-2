import React from "react";
import style from './style.module.scss';

const Fishing = () => {
    return (
        <div className={style.fishing}>
            <h1>There are many online games available...</h1>
            <button className={style.buttonFish}><a href="https://nybabysteps.com/blog/fun-fishing-games-for-kids/" target="_blank">Click here for fun games</a></button>
        </div>
    );
}
export default Fishing;