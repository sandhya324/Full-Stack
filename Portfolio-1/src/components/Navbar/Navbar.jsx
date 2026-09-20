import React from 'react'
import './Navbar.css'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Navbar'>

        {/* <div className="profile">
          <img src="" alt="" />
        </div> */}


        <div className="navbar-menu">


          <li><a href="/">Home</a></li>
          <li><a href="/Aboutus">About Me</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Technologies">Technologies</a></li>
        </div>


        <div className="contact-btn">
          <li><a href="/Contact">Contact Us</a></li>
        </div>
      
    </div>
  )
}

export default Navbar