import React from 'react';
import './Header.css';
import crm from '../images/crm.png';


function Home() {
  return (
    <div className='cont'>
      <div className='crm'>
        <img src={crm} />
      </div>
    <h1> Multi Customer Relationship Management</h1>
    <p> We are focused on changing the way people do work</p>
    <button><a href=''>Get started</a></button> <span>CX 365</span>
    
  </div>

  )
}

export default Home;