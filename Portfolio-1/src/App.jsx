import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import AboutUs from './pages/AboutUs/AboutUs'
import Projects from './pages/Projects/Projects'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/aboutus' element={<AboutUs/>} />
             <Route path='/projects' element={<Projects />} />
         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
