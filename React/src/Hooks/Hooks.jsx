import {useEffect, useState} from 'react'

const Hooks = () => {

  // --------- use effect ----------
  //  Case 1: No dependency array

  // useEffect(() =>{
  //        console.log("Component Rendering");
  //   })


   //  Case 2: Empty dependency array ([] -> run only once)

    // useEffect(() =>{
    //      console.log("Component Rendering");
    // }, [])


  //  Case 3: Dependency
   

  // useEffect(()=>{
  //   console.log("Count Change");
  // }, [count]);


// const [count, setCount] = useState(0);

// useEffect(() => {
//     document.title = `Count: ${count}`
// }, [count]);


// --------- use effect CleanUp----------

//  useEffect(()=>{
//   const timer = setInterval(() => {
//      console.log("Hello");
//      <br /> 
//   }, 1000);
//  })



    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
 

  return (
    <div>
      {/* clearInterval(timer); */}

      <h1>Count: {count}</h1>

      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(0)}>Reset</button> 
      <button onClick={()=> setCount(count>0? (count-1) : count)}>Decrease</button> 
        
    </div>
  ) 
}

export default Hooks
