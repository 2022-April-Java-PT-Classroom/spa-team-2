// import React from 'react';
// import solar from "../../assets/180bc0df5862bbbba10020eb45c320b4.jpeg";
// import style from './style.module.scss';

// const Game = () => {
//     return (
//         <><><><div className={style}>
//             <h1>Games to play</h1>
//             <br></br>


//         </div>
//             <div><h2>Puzzle Game</h2></div>
//             <div className={style.board} /></><h3> Turns: <span>0</span></h3></><div><img className="title" src={solar} alt="Solar" /></div></>
//     )};
    // var rows = 3;
    // var columns = 3;
    
    // var currTitle;
    // var otherTitle;

    // var turns = 0;

    // var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]
    // window.onload = function(){
    //     for(let r = 0; r< rows; r++) {
    //         for(let c = 0; c < columns; c++){

    //             let title = document.createElement("img");
    //             title.className= r.toString() + "-" + c.toString();
    //             title.scr = imgOrder.shift() + ".jpeg";

    //             title.addEventListener("dragstart", dragStart);
    //             title.addEventListener("dragover", dragOver);
    //             title.addEventListener("dragenter", dragEnter);
    //             title.addEventListener("dragleave", dragLeave);
    //             title.addEventListener("drop", dragDrop);
    //             title.addEventListener("dragend", dragEnd);

                

    //             document.getElementsByClassName(style.board).append(title);
    //         }
    //     }
    // }
    
    // function dragStart(){
    //     currTitle = this;
    // }

    // function dragOver(e){
    //     e.preventDefault();
    // }

    // function dragEnter(e){
    //     e.preventDefault;
    // }

    // function dragLeave(){
        
    // }

    // function dragDrop(){
    //     otherTitle = this;
    // }

    // function dragEnd(){
    //    let currImg = currTitle.src;
    //    let otherImg = otherTitle.src;
       
    //    currTitle.src = otherImg;
    //    otherTitle.src = currImg;
       
    // }



// export default Game;