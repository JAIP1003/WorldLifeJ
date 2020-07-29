import React, { Component } from 'react';

import './Navbarcss.css';

import Below from './Below';

function Subscribe()
{
    return(
        <div className="subscribe">
            <h4>ABOUT DONATICS</h4>
            <h1>
            Stay Informed With Our Latest News

            </h1>
            <p>
            Subscribe to out newsletter to get latest news about our products, events and sales
            </p>

            <form className="Form" method="" action="">
               <input type="email" name="email" placeholder="Your email address" className="SubsInput" autoComplete="off" required ></input> 
            <a href="#" >
               <label className="Subslabel1">SUBSCRIBE</label>
            </a>
            </form>

            <div className="callCenter">
                <span>
                <h5>Call Center</h5>
                <h2 className="callNum">1-888-123-4567</h2>
                </span>
                <span>
                <h5>Asking Question</h5>
                <h2 className="asking">worldlife@mail.com</h2>
                </span>
                
            </div>
            <Below/>
        </div>
    );
}

export default Subscribe;