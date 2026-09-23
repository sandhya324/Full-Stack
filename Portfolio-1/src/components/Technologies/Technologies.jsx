import React from 'react'
import './Technologies.css'

import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";




const Technologies = () => {
  return (
    <div>
        
    <div className="tech-stack">

      <h1>My Tech Stack</h1>

    <div className="tech-cards">
      

      <div className="tech-card">
        <div className="tech-icon">
            <i><FaReact /></i>
        </div>
        <h3>React</h3>
      </div>

      <div className="tech-card">
        <div className="tech-icon">
            <i><FaJs /></i>
        </div>
        <h3>JavaScript</h3>
      </div>


      <div className="tech-card">
        <div className="tech-icon">
            <i><FaNodeJs /></i>
        </div>
        <h3>NodeJs</h3>
      </div>

      <div className="tech-card">
        <div className="tech-icon">
            <i><SiExpress /></i>
        </div>
        <h3>ExpressJs</h3>
      </div>

      <div className="tech-card">
        <div className="tech-icon">
            <i><SiMongodb /></i>
        </div>
        <h3>Mango DB</h3>
      </div>

    </div> 

    


    </div>

      
    </div>
  )
}

export default Technologies
