import React from 'react';
import img0 from '../../assets/0.jpg';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import solar from "../../assets/180bc0df5862bbbba10020eb45c320b4.jpeg";
import style from './style.module.scss';

const Game = () => {
    return (
        <><div className={style}>
            <h1>Games to play</h1>
            <br></br>


        </div><div><h2>Puzzle Game</h2></div><div className={style.board}>
                <img src={img0} alt='image 1' />
                <img src={img1} alt='image 2' />
                <img src={img2} alt='image 3' />
                <img src={img3} alt='image 4' />
                <img src={img4} alt='image 5' />
                <img src={img5} alt='image 6' />
                <img src={img6} alt='image 7' />
                <img src={img7} alt='image 8' />
                <img src={img8} alt='image 9' />

            </div><h3 className='turns'> Turns: <span>0</span></h3></>
    )};
    var rows = 3;
    var columns = 3;
    
    var currTitle;
    var otherTitle;

    var turns = 0;

    // var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
    window.onload = function(){
        for(let r = 0; r< rows; r++) {
            for(let c = 0; c < columns; c++){

                let title = document.createElement("img");
                title.className= r.toString() + "-" + c.toString();
                title.scr = imgOrder.shift() + ".jpg";

                title.addEventListener("dragstart", dragStart);
                title.addEventListener("dragover", dragOver);
                title.addEventListener("dragenter", dragEnter);
                title.addEventListener("dragleave", dragLeave);
                title.addEventListener("drop", dragDrop);
                title.addEventListener("dragend", dragEnd);

                

                document.getElementsByClassName(style.board).append(title);
            }
        }
    }
    
    function dragStart(){
        currTitle = this;
    }

    function dragOver(e){
        e.preventDefault();
    }

    function dragEnter(e){
        e.preventDefault();
    }

    function dragLeave(){
        
    }

    function dragDrop(){
        otherTitle = this;
    }

    function dragEnd(){
        if(!otherTitle.src.includes("3.jpg")){
            return;
        }
        let currCoords = currTitle.className.split("-");
        let r = parseInt(currCoords[0]);
        let c = parseInt(currCoords[1]);
        let otherCoords = otherTitle.split("-");
        let r2 = parseInt(otherCoords[0]);
        let c2 = parseInt(otherCoords[1]);

        let moveLeft = r == r2 && c2 == c-1;
        let moveRight = r == r2 && c2 == c+1;

        let moveUp = c == c2 && r2 == r-1;
        let moveDown = c == c2 && r2 == r+1;
        
        let isAdjacent = moveLeft || moveRight || moveUp ||  moveDown;
        
        if(isAdjacent){
       let currImg = currTitle.src;
       let otherImg = otherTitle.src;
       
       currTitle.src = otherImg;
       otherTitle.src = currImg;
       
       turns += 1;
       document.getElementsByClassName("turns").innerText =  turns;
     }
       
    }

export default Game;

