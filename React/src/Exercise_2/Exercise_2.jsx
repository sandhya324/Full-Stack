import { useState } from 'react'

const Exercise_2 = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sandhya");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      
      <h1>Counter</h1>
      
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <h2>{count}</h2>  <button onClick={()=> setCount(0)}>Reset </button>
      <button onClick={()=> setCount(count == 0 ? 0 : count - 1)}> Decrease</button>




      {/* -----Updating Strings----- */}

      <h2>{name}</h2>
      <button onClick={()=> setName("SANDHYA")}>Change Name</button>



       <br /> 
       <br />
       {/* ----- Boolean State ----- */}
       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Login In
      </button>

      

    </div>
  ) 
}

export default Exercise_2