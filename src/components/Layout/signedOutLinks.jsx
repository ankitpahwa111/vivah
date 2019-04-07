import React from 'react';
import {NavLink } from 'react-router-dom';
const SignedOutLinks = ()=>{
    return(
        <div className="right">
            <ul>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>

            </ul>
        </div>
        
    )
}
export default SignedOutLinks;