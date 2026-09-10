import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
     <div className="Footer">

      <div className="footer-links">
        <h2>Useful links</h2>
        <li><a href="">Home</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">FAQs</a></li>
        <li><a href="">Contact us</a></li>

      </div>


      <div className="follow-icons">
        <h2>Follow us</h2>

        <ul>
          <li><i><FaFacebook /></i></li>
          <li><i><FaInstagram /></i></li>
          <li><i><FaLinkedin /></i></li>
          <li><i><FaTwitter /></i></li>
        </ul>

      </div>
     </div>
    </div>
  )
}

export default Footer
