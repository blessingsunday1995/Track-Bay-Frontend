import React from 'react';
import './Nav.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navitem'>
        <li><a href='0'>Features</a></li>
        <li><a href='1'>Pricing</a></li>
        <li><a href='2'>Webinars</a></li>
        <li><a href='3'>Blog</a></li>
        <li><a href='4'>Pages</a></li>
        <li><a href='5'>Newsletter</a></li>
        <button><a href="login">Log In</a></button>
        <button><a href=''>Sign up</a></button>
      </ul>
    </nav>
  )
}

export default Navbar;