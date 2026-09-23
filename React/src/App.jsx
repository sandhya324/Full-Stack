import {useState} from 'react'
import Exercise_1 from './Exercise_1/Exercise_1'
import Exercise_2 from './Exercise_2/Exercise_2'
import Hooks from './Hooks/Hooks.jsx'
import Counter from './Hooks/Counter.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import UserContext from './UserContext.jsx'
import Profile from './profile.jsx'

import Home from './Components/pages/home.jsx'
import About from './Components/pages/about.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import LiftingState from './LiftingState.jsx'
import ConditionRendering from './ConditionRendering.jsx'

const App = () => {
  //  const user = "Sandhya";

  // const [count, setCount] = useState("");
  // const [name, setName] = useState("");
  // const [show, setShow] = useState("show");

  // function sayHello(){
  //   alert("Hello React!");
  // }


  // function handleSubmit(e){
  //   e.preventDefault();
  //   alert("Form Submitted !");
  // }


  return (
    <>

      {/* <UserContext.Provider value={user}>     {/*Provide the data 
        <Profile />
      </UserContext.Provider> */}

      {/* <button onClick={sayHello}>Click me</button>


      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      <button onClick={()=> setCount(Math.max(0, count - 1))}>-</button>

      <button onClick={()=> alert("Hello !")}>Click</button>


      <input  type="text" onChange={(e)=> setName(e.target.value)} />
      <h1>{name}</h1> */}


      {/* <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>



      <button

       onMouseEnter={()=> console.log("Mouse Enter")}
       onMouseLeave={()=> console.log("Mouse Leave")}
      
      >Hover me</button>

      <input
        onKeyDown={() => console.log("Key Pressed")}
      /> */}




{/*   
     
        
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      
        {name === "" ? (
           <p>Please enter your name</p>
        ) : (
          show && ( name === "Sandhya" ? <h1>Welcome back sandhya</h1> : <h1>Hello, {name}</h1> )
        )}

   
        <button onClick={()=> setShow(!show)} >{show? "Hide Greeting" : "Show Greeting"}</button>
        <button onClick={()=> setName("")}>Clear</button>
        */}


      {/* < Exercise_1 /> */}
      {/* < Exercise_2 /> */}
      {/* < Hooks /> */}
      {/* <Counter/> */}
      {/* <Navbar />*/}
      {/* <UserContext /> */}
      {/* <h1>Home Page</h1>
      <Footer />  */}

        {/* <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path='/about/:id' element={<About/>} ></Route>
        </Routes>
        
        </BrowserRouter> */}


        {/* <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           {/* <Route path='/services' element={<Services />} /> 
         </Routes>
        </BrowserRouter> */}



        {/* <LiftingState /> */}
        <ConditionRendering />
    










    </>
  )
}

export default App
