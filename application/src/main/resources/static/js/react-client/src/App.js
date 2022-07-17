import React, { Component } from 'react';

import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import {Howel} from 'howler';
import style from './style.module.scss';

const App = () => {
  return (
    // JSX (JavaScript and XML)
    <div>
      <BrowserRouter>
        <Header />
        <div className={style.pages} >
          <AppRouter />
        </div>        
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;


