// import {useEffect, useState} from 'react'

// const Hooks = () => {

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



  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //       document.title = `Count: ${count}`;
  //   }, [count]);
 

  // return (
  //   <div>
  //     {/* clearInterval(timer); */}

  //     <h1>Count: {count}</h1>

  //     <button onClick={()=> setCount(count + 1)}>Increase</button>
  //     <button onClick={()=> setCount(0)}>Reset</button> 
  //     <button onClick={()=> setCount(count>0? (count-1) : count)}>Decrease</button> 
        
  //   </div>
  // ) 
// }

// export default Hooks



















//---------------------------------- useRef --------------------------------

// import { useRef } from "react";


// const Hooks = () => {

//   const inputRef = useRef(null);

//     function focusInput() {
//         inputRef.current.focus();
//     }

    
//   return (
//     <div>
//       <input ref={inputRef} type="text" />

//       <button onClick={focusInput}>
//           Focus Input
//       </button>
      
//     </div>
//   )
// }

// export default Hooks



















//---------------------------------- useReducer --------------------------------

// import { useReducer } from "react";
// function reducer(state, action) {

//     if (action.type === "increment") {
//         return {
//             count: state.count + 1
//         };
//     }

//     if (action.type === "decrement") {
//         return {
//             count: state.count - 1
//         };
//     }

//     return state;
// }

// function Hooks() {

//     const [state, dispatch] = useReducer(
//         reducer,
//         { count: 0 }
//     );

//     return (
//         <>
//             <h1>{state.count}</h1>

//             <button onClick={() => dispatch({ type: "increment" })}>
//                 +
//             </button>

//             <button onClick={() => dispatch({ type: "decrement" })}>
//                 -
//             </button>
//         </>
//     );
// }

// export default Hooks










//---------------------------------- useMemo --------------------------------
// import { useMemo, useState } from "react";

// function App() {

//     const [number, setNumber] = useState(10);

//     const doubled = useMemo(() => {
//         return number * 2;
//     }, [number]);

//     return (
//         <>
//             <h1>{doubled}</h1>

//             <button onClick={() => setNumber(number + 1)}>
//                 Increase
//             </button>
//         </>
//     );
// }
// export default App













//---------------------------------- useCallback --------------------------------
// import {useState} from "react";

// function App() {

//     const [count, setCount] = useState(0);

//     function handleClick() {
//         console.log("Clicked");
//     }

//     return (
//         <button onClick={handleClick}>
//             Click
//         </button>
//     );
// }

// export default App

// Functions are objects in JavaScript
// function Parent() {

//     const [count, setCount] = useState(0);

//     function handleClick() {
//         console.log("Clicked");
//     }

//     return (
//         <>
//             <p>{count}</p>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </>
//     );
// }

// export default Parent








//---------------------------------- useLayoutEffect --------------------------------

// import { useLayoutEffect, useRef } from "react";

// function App() {

//     const boxRef = useRef(null);

//     useLayoutEffect(() => {

//         const width = boxRef.current.offsetWidth;
//         console.log(width);

//     }, []);

//     return (
//         <div ref={boxRef}>
//             Hello
//         </div>
//     );
// }

// export default App





//---------------------------------- useId --------------------------------
// import { useId } from "react";

// function Login() {

// const inputId = useId();
// const descriptionId = useId();

// return (
//     <>
//         <label htmlFor={inputId}>
//             Password
//         </label>

//         <input
//             id={inputId}
//             aria-describedby={descriptionId}
//         />

//         <p id={descriptionId}>
//             Password must contain at least 8 characters.
//         </p>
//     </>
// );}

// export default Login






//---------------------------------- useTranaction --------------------------------

// import { useState, useTransition } from "react";

// function Search() {

//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);

//     const [isPending, startTransition] = useTransition();

//     function handleChange(event) {

//         const value = event.target.value;

//         setQuery(value);

//         startTransition(() => {
//             const filtered = hugeList.filter(item =>
//                 item.name
//                     .toLowerCase()
//                     .includes(value.toLowerCase())
//             );

//             setResults(filtered);
//         });
//     }

//     return (
//         <>
//             <input
//                 value={query}
//                 onChange={handleChange}
//             />

//             {isPending && <p>Updating results...</p>}

//             {results.map(item => (
//                 <p key={item.id}>
//                     {item.name}
//                 </p>
//             ))}
//         </>
//     );
// }

// export default Search;












//---------------------------------- useDefferedValue --------------------------------

// import { useState, useDeferredValue } from "react";

// function Search() {

//     const [query, setQuery] = useState("");
//     const deferredQuery = useDeferredValue(query);

//     return (
//         <>
//             <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />

//             <SearchResults query={deferredQuery} />
//         </>
//     );
// }

// export default Search;








//---------------------------------- custom Hooks --------------------------------
// Custom Hooks: Custom Hook is a javaScipt function we create ourself to reuse the react logic between multiple conponents.

// import {useState} from "react";

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increment(){
//     setCount(count + 1);
//   }

//   function decrement(){
//     setCount(count - 1);
//   }

//   function reset(){
//     setCount(0);
//   }


// return{
//   count,increment, decrement, reset
// }}

// export default useCounter;




//---------------------------------- Hide/Show text --------------------------------

// import { useState } from "react";

// function useToggle(initialValue = false) {

//     const [value, setValue] = useState(initialValue);

//     function toggle() {
//         setValue(prev => !prev);
//     }

//     return [value, toggle];
// }

// export default useToggle;












//----------------------------------  password visibility --------------------------------

import {useState} from "react";

function useVisibility(){
  // console.log("hook used")

  const [show, setShow] = useState(false);

  function changeVisibility(){
    setShow(prev => !prev);
  }
  return [show, changeVisibility];
}

export default useVisibility;















//----------------------------------  Dark/Light theme --------------------------------

// import {useState} from "react";

// function useChangeTheme(){
  
//   const [value, setValue] = useState(false);

//   function toggleDarkMode(){
//     setValue(prev => !prev);
//   }

//   return [value, toggleDarkMode];

// }

// export default useChangeTheme;