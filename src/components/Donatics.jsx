import React, { Component } from 'react';

import ImageBoxParent from './ImageBoxParent';
import ImageBox2 from './ImageBox2';




const Donatics=()=>{
    return(
        <div className="imageWhiteRight">
        <div className="imageWhite">
            <img src="https://i.ibb.co/cLxHhKS/h2-bg01.jpg" alt="backimg"></img>
            <div className="imageWhiteText">
              <h4>ABOUT DONATICS</h4>  
            <h1>
            Donatics was incorporated on April 1, 1994, with seed capital from the Ion
                </h1>
                <p>
                Our desire was to transform the world of philanthropy by looking at all human beings as members of a single, global community where
                everyone had the opportunity. Going to school is happy for any poor child so education is always a priority issue. Power outages in
                communities across.
                </p>
               
               <a className="learnOverlay" href="#" >LEARN MORE</a>
            </div>
        </div>
        <div className="ImageBoxRight1">
            <ImageBoxParent/>
        </div>
        <div>
        <ImageBox2/>
        </div>
        </div>
    );
}
export default Donatics;