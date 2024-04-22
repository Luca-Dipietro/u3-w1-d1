import React from 'react';
import logo from "../logo.svg"
import "../App.css";

function NavBar(){
    return (
        <div className='nav-container'>
        <nav className='nav-bar'>
            <div><img src={logo} className="App-logo" alt="logo" />
        </div>
          <ul className='App-list'>
            <li> <a href="/" className='App-link'>Home</a></li>
            <li><a href="/" className='App-link'>Shop</a></li>
            <li><a href="/" className='App-link'>About Us</a></li>
          </ul>
        </nav>
        </div>
      );

}
export default NavBar