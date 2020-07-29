import React, { Component } from 'react';


import './Menucss.css';


const Menu=()=>{
    return(

        <div className="wrapper">
            <a className="menu"  href='/'>HOME</a>
            <a className="menu"  href='/About'>ABOUT</a>
            <ul>
                <li className="menu">CAMPAIGNS</li>
                <ul>
                <li>
                    <a href="#">Login Page</a>
                </li>
                <li>
                <a href="#">Profile Editer</a>
                </li>
                <li>
                <a href="#">Donation History</a>
                </li>
                <li>
                <a href="#">Donation Confirmation</a>
                </li>
                <li>
                <a href="#">Donation Fail</a>
                </li>
                <li>
                <a href="#">Doner Wall</a>
                </li>
                </ul>
            </ul>
            {/* <a className="menu"  href='/Campaign'>CAMPAIGNS

            </a> */}
            <a className="menu"  href='/Events'>EVENTS</a>
            <a className="menu"  href='/Blog'>BLOG</a>
            <a className="menu"  href='/Page'>PAGE</a>
            <a className="menu"  href='/Contact'>CONTACT</a>
            <a className="donation" href='/Donation'>Donate Now</a>

        </div>
    );
}
export default Menu;