import {useState} from 'react'
import Exercise_1 from './Exercise_1/Exercise_1'
import Exercise_2 from './Exercise_2/Exercise_2'
import Hooks from './Hooks/Hooks.jsx'

import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import UserContext from './UserContext.jsx'
import Profile from './profile.jsx'


const App = () => {
  //  const user = "Sandhya";

  const [count, setCount] = useState("");


  function sayHello(){
    alert("Hello React!");
  }
  return (
    <div>

      {/* <UserContext.Provider value={user}>     {/*Provide the data 
        <Profile />
      </UserContext.Provider> */}

      <button onClick={sayHello}>Click me</button>


      <h1>{count}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      <button onClick={()=> setCount(Math.max(0, count - 1))}>-</button>

      

      


    

      



      {/* < Exercise_1 /> */}
      {/* < Exercise_2 /> */}
      {/* < Hooks /> */}
      {/* <Navbar />*/}
      {/* <UserContext /> */}
      {/* <h1>Home Page</h1>
      <Footer />  */}
    </div>
  )
}

export default App
