import React, { useState } from 'react';

import Dhana from '../../assets/Dhana.JPG';
import Hailey from '../../assets/Hailey.JPG';
import Mark from '../../assets/Mark.jpeg';
import axios from 'axios';
import farida from '../../assets/farida.png';
import jimmy from '../../assets/jimmy.jfif';
import style from './about.module.scss';
import zach from '../../assets/zach.jpg';

const AboutPage = () => {
    return (
        <div className={style.about}>
            <div style={{ 
  backgroundImage: `url('../../assets/bg.jpg')` 
}}></div>
            <h2 className={style.h2}>This is our about Page</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <div></div>
                <div className={style.section1}>

                <img src={Hailey} alt='PP' /> 
                <h2>Hailey Fate</h2>
                <p>Bio: Columbus, Ohio. A fast learner with strong time management and multi-tasking skills. 
                    Proficient troubleshooting and problem-solving skills. Love live music and the outdoors.</p>
                <img src={farida} alt='PP' />
                <h2>Farida NDiaye</h2>
                <p>Bio: Hello, I'm Farida. I live in Columbus, passionate about traveling and discovering. 
                    I love trying/learning new skills and taking on professional challenges.</p>
                <img src={Dhana} alt='PP' />
                <h2>Dhana P Acharya</h2>
                <p>Current Amazon Problem Solver , Process Guide, and Learning Ambassador  for problem solvers 
                    and  Count Associates looking to further career in  IT field 
                    by obtaining a role of a Front End Developer to make best use of the experiences and skills 
                    that I gained through We CAN CODE IT, and Kenzie Academy.
                    I am a passionate learner. Learning means fun to me. Learning anything new always enchants me.
                    I love coding.
                    Literally, I started coding from Zero,but my passion for coding dismantled 
                    all the hinderances that 
                    I came across.
                    Honestly, getting into WCCI world of coding broadened my understanding for both Back-end and Front-end.
                    Now, I can say that I am in better standing regarding coding and its implementation. </p>

                </div>

                <div className={style.section2}>
                <img className={style.img} src={jimmy} alt='PP' />
                <h2 className={style.h2}>Jimmy Negron</h2>
                <p>Hello! My name is Jimmy Negron,
                 Im 27 i was a house keeper for 5 years and a machinist for a year and a half.
                 I always wanted to work with computers so when i found we can code it i got really excited and started my journy to become a Software developer!</p>
                <img className={style.img} src={zach} alt='PP' />
                <h2 className={style.h2}>Zach Martin</h2>
                <p>Zachary Martin is a Columbus-based full-stack software developer with a passion for travel, the outdoors,
                 gardening, and technology. His passion for technology started very early, when he took an interest in gaming and computers from there, 
                 his interest in hardware and software design grew. Though his passion was in technology, it was his love for the outdoors and interest in life science that drove him to pursue a Bachelors degree in Biology at Ohio University,
                 which he completed in 2009. Zach is enthusiastic about growing and gaining new skills as a software developer and is looking forward to a future in the field of IT!</p>
                 <img className={style.img} src={Mark} alt='PP' />
                <h2 className={style.h2}>Mark Sypniewski</h2>
                <p>Mark is a Full-stack Jr. Developer from Cleveland, Ohio. He has 17 years experience in 3D modeling and CNC programming as well as 10 years as a Design Engineer in the Aerospace field.</p>
              </div>
              </div>

    
    );
}
export default AboutPage;

