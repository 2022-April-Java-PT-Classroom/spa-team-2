import React, { useState, useEffect } from 'react';
import style from './jac.module.scss';
import advButton from '../../assets/adventurebtn.jpg';
import jacImage from '../../assets/jac.jpeg';
import axios from 'axios';
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
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

const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
  const getNasaWithFetch = async () => {
  const response = await fetch(nasaUrl);
  const jsonData = await response.json();
  setNasaData(jsonData);
}
  getNasaWithFetch()
}, []);



return (
       
   <div className={style.mystere}>
        <div className={style.container}>

            <div className={style.section1}>
                <h2>Jac's Daily Activity</h2>
                <h2 className="style.activity">{boredData.activity}</h2>
            </div> 
        
            <div className={style.section1}>
                <h2>Jac's Daily Space Picture</h2>
                <img src = {nasaData.url}/>
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