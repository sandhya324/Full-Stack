import {assets} from '../../assets/assets'
import './Home.css'

import AboutUs from '../../components/AboutUs/AboutUs'
import Projects from '../../components/Projects/Projects'
import Technologies from '../../components/Technologies/Technologies'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
  <>

    <div className="home">

      <div className="profile-left">
        <h1>Hello, I'm Sandhya.</h1>
        <h3>Full Stack Developer</h3>

        <p>
          Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, and SQL, with experience 
          building responsive web applications, REST APIs, and database-driven solutions. Passionate about 
          clean code and continuous learning.
        </p>

        <div className="profile-btn">
          <button>View Profile</button>
          <button>Contact Me</button>
        </div>
      </div>


      <div className="profile-right">
        <img src={assets.profile} alt="" />
      </div>

        
      
    </div>

    <AboutUs />
    <Projects />
    <Technologies />
    <Contact />


  </>
  )
}

export default Home
