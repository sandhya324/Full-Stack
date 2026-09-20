import React from 'react'
import './Projects.css'

import {assets} from '../../assets/assets'





const Projects = () => {
  return (
    <div>


         <div className="projects">
      
            <h1>My Projects</h1>
      
            <div className="my-project">
      
      
              <div className="card">
                <img src={assets.project} alt="" />
      
                <div className="card-body">
                    <h5 className="card-title">Full Stack Project</h5>
                    <p className="card-text">Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, and SQL, building responsive web applications.</p>
                    <button>View More</button>
                </div>
              </div>
      
              <div className="card">
                <img src={assets.project} alt="" />
      
                <div className="card-body">
                    <h5 className="card-title">Full Stack Project</h5>
                    <p className="card-text">Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, and SQL, building responsive web applications.</p>
                    <button>View More</button>
                </div>
              </div>
      
      
              <div className="card">
                <img src={assets.project} alt="" />
      
                <div className="card-body">
                    <h5 className="card-title">Full Stack Project</h5>
                    <p className="card-text">Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, and SQL, building responsive web applications.</p>
                    <button>View More</button>
                </div>
              </div>
      
      
              <div className="card">
                <img src={assets.project} alt="" />
      
                <div className="card-body">
                    <h5 className="card-title">Full Stack Project</h5>
                    <p className="card-text">Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, and SQL, building responsive web applications.</p>
                    <button>View More</button>
                </div>
              </div>
      
      
            </div>
          </div>
      
      
      
      
      
    </div>
  )
}

export default Projects
