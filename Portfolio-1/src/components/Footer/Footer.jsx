import './Footer.css'
import '../../assets/assets'
import { assets } from '../../assets/assets'


import { FaLinkedinIn, FaGithubAlt,  FaSquareInstagram, FaSquareXTwitter,  } from "react-icons/fa6";





const Footer = () => {
  return (
    <div className='Footer'>

      <div className="footer-left">
        <h2>About Me</h2>
        <img src={assets.profile} alt="" />
        <p>Full Stack Developer skilled in React, JavaScript, Node.js, Express.js, 
          and SQL, building responsive web applications.</p>
      </div>


      <div className="footer-links">
        <h2>Useful Links</h2>

        <div className="menu-links">
          <li><a href="/">Home</a></li>
          <li><a href="/Aboutus">About Us</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/Technologies">Technologies</a></li>
          <li><a href="/Contact">Contact Us</a></li>
        </div>

      </div>


      <div className="footer-right">
        <h2>Follow Me</h2>

        <div className="social-media-links">
          <li><i><FaLinkedinIn /></i></li>
          <li><i><FaGithubAlt /></i></li>
          <li><i><FaSquareInstagram /></i></li>
          <li><i><FaSquareXTwitter /></i></li>
        </div>
      </div>

      
    </div>
  )
}

export default Footer
