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
      <div className={style.jac}>
        <header>
          <h2>Jac's Daily Adventure!</h2>
        </header>
        <div className="style.container">
          <h2 className="style.activity">{boredData.activity}</h2>
        </div>
      </div>
    );
  }

export default Jac;