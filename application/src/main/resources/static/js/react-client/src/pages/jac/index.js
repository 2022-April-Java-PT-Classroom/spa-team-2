import React, { useState, useEffect } from 'react';
import style from './jac.module.scss';
import advButton from '../../assets/adventurebtn.jpg';
import jacImage from '../../assets/jac.jpeg';
import axios from 'axios';

const boredUrl = 'http://www.boredapi.com/api/activity/';

const Jac = () => {

    const [boredData, setBoredData] = useState([]);

    useEffect(() => {
    const getBoredWithFetch = async () => {
    const response = await fetch(boredUrl);
    const jsonData = await response.json();
    setBoredData(jsonData);
  }
    getBoredWithFetch()
}, []);
return (
       
   <div className={style.mystere}>
        <div className={style.container}>

            <div className={style.section1}>
                <h2>Jac's Daily Adventure</h2>
          <h2 className="style.activity">{boredData.activity}</h2>
            </div> 
        

            
            <div className={style.section2}>
                <h2>Jac Enterprises</h2>
                <a href='http://127.0.0.1:5500/index.html' target="_blank"><img src={jacImage} alt='jac image' /></a> 
            </div>
       </div>
     </div>
   
   )
}

export default Jac;