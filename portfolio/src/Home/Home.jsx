import './Home.css'
import assets from '../assets/assets'

const Home = () => {
  return (

  <div>

    <div className='Home'>
        
      <div className="about-left">
         <h1>About Me</h1>
         <p>I’m Olivia Bennett, a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world solutions while continuously improving my skills in software development and problem-solving.
            <br /><br />I love creating clean and intuitive digital experiences that are both functional and visually appealing. I’m always eager to learn new technologies, take on new challenges, and grow as a developer.</p>
      
        <button className='about-btn'>Know More →</button>
      </div>

      <div className="about-right">
        <img src={assets.about} alt="" />
      </div>

    </div>





    <div className="statistics">

      <ul>
        <li>
           <h2>10 +</h2>
           <p>Projects Completed</p>
        </li>

        <li>
           <h2>6 +</h2>
           <p>Technologies In my tech stack</p>
        </li>

        <li>
           <h2>100 +</h2>
           <p>DSA Problems solved</p>
        </li>

        <li>
           <h2>5 +</h2>
           <p>Web Applications built</p>
        </li>

        <li>
           <h2>1 +</h2>
           <p>Years Learning & Building</p>
        </li>
    
      </ul>
    </div>





    <div className="service">
        <h1>My Services</h1>

        <div className="service-cards">
      
            <div className="card">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">I build modern, responsive, and user-friendly interfaces for all devices.</p>
                <button className="card-btn">View more</button>
              </div>
            </div>

            <div className="card">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">I develop reliable backend systems and REST APIs for smooth application functionality.</p>
                <button className="card-btn">View more</button>
              </div>
            </div>

            <div className="card">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Database Development</h5>
                <p className="card-text">I design and manage structured databases for efficient data storage and retrieval.</p>
                <button className="card-btn">View more</button>
              </div>
            </div>

            <div className="card">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Responsive Web Design</h5>
                <p className="card-text">I create responsive websites that deliver a smooth experience across all screen sizes.</p>
                <button className="card-btn">View more</button>
              </div>
            </div>

      </div>

    </div>

    






  </div>
  )
}

export default Home
