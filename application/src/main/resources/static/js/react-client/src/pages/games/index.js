import React from 'react';
import style from './style.module.scss';
const Game = () => {
    return (
        <><><div className={style}>
            <h1>Games to play</h1>
            <br></br>


        </div>
            <div><h2>Puzzle Game</h2></div>
            <div className={style.board} /></><h3> Turns: <span>0</span></h3></>
    );
}



export default Game;