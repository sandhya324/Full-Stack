import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import AboutUs from './components/AboutUs/AboutUs'
import Projects from './components/Projects/Projects.jsx'
import Technologies from './components/Technologies/Technologies.jsx'
import Contact from './components/Contact/Contact.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      < Navbar />
      
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/aboutus' element={<AboutUs/>} />
             <Route path='/projects' element={<Projects />} />
             <Route path='/technologies' element={<Technologies />} />

             <Route path="/contact" element={<Contact />} />
         </Routes>
      </BrowserRouter>

      <Footer />
      
    </div>
  )
}

export default App
