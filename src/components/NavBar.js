import React from 'react'
import './Style.css';
import {  Link } from 'react-router-dom';


const NavBar = ()=> {
    const navStyle =  {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/about">About</Link></li>
                <li><Link style={navStyle} to="cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
