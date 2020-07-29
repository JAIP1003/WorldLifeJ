import React, { Component } from 'react';

import Contact from './navbar/Contact';
import About from './navbar/About';
import Campaign from './navbar/Campaign';
import Blog from './navbar/Blog';
import Events from './navbar/Events';
import Home from './navbar/Home';
import Page from './navbar/Page';
import {Route, Switch } from 'react-router-dom';
import Donation from './navbar/Donation';
import Menu from './navbar/Menu';


import './Navbarcss.css';

import sData1 from './Sdata';

function Navbar(){
    return(
      
        <div className='top'>
            <span className="worldlife">🤔 Worldlife</span>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Blog' component={Blog}/>
                <Route exact path='/Events' component={Events}/>
                <Route exact path='/Campaign' component={Campaign}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/Page' component={Page}/>
                <Route exact path='/Donation' component={Donation}/>
            </Switch>
            
        </div>
    );
}

export default Navbar;
