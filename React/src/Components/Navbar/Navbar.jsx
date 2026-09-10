import './Navbar.css'

const Navbar = () => {
  return (
    <div>

      <div className="navbar">

         <div className="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
         </div>


         <div className="login-btn">
           <button>Login</button>
         </div>

      </div>

      

    </div>
  )
}

export default Navbar
