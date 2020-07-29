import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom';

import ImageBar from './components/ImageBar';

import Donatics from './components/Donatics';


import Subscribe from './components/Subscribe';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar/>
      <ImageBar/>
      <Donatics/>
      <Subscribe/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
