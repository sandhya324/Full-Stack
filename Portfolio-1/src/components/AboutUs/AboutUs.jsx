import React from 'react'
import './AboutUs.css'

import {assets} from '../../assets/assets'

const AboutUs = () => {
  return (
    <div>
        
   <div className="aboutMe">

       <h1>About Me</h1>

      <div className="About-section">

       <div className="about-left">
        <img src={assets.about} alt="" />
       </div>


       <div className="about-right">
          <p>Full Stack Developer skilled in building responsive and user-friendly web applications using React, JavaScript, Node.js, Express.js, and SQL. Experienced in developing frontend interfaces, REST APIs, database-driven applications, and integrating complete end-to-end web solutions. Passionate about writing clean, scalable code and continuously learning modern technologies.</p>
       </div>

       </div> 

   </div>

      
    </div>
  )
}

export default AboutUs
