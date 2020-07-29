import React, { Component } from 'react';

import './Navbarcss.css';



function ImageBox(props){
    return(
        <div className="transparentBox">
        <div className="imageBox" >
        <img src={props.imgsrc} alt="jai prakash" ></img>
        <div className="transpa">
        <div className="logoBox">{props.logo}</div>
        <div className="text">{props.title}</div>
        </div>
        </div>
        </div>
    );
}

export default ImageBox;