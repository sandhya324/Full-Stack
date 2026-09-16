// import useCounter from "./Hooks.jsx";

// function Counter() {

//     const {
//         count,
//         increment,
//         decrement,
//         reset
//     } = useCounter();

//     return (
//         <>
//             <h1>{count}</h1>

//             <button onClick={increment}>
//                 +
//             </button>

//             <button onClick={decrement}>
//                 -
//             </button>

//             <button onClick={reset}>
//                 Reset
//             </button>
//         </>
//     );
// }

// export default Counter;



















// import useToggle from './Hooks'

// function App() {

//     const [isOpen, toggle] = useToggle(false);

//     return (
//         <>
//             <button onClick={toggle}>
//                 Toggle
//             </button>

//             {isOpen && (
//                 <p>Hello! The content is visible.</p>
//             )}
//         </>
//     );
// }

// export default App;








//----------------------------------  password visibility --------------------------------
import useVisibility from './Hooks'
function App(){
     
    const[visibility, changeVisibility] = useVisibility(false);
 

    return(
        <>
        
        <label>Password</label>
        <input type={visibility ? "text" : "password"} placeholder="Enter your Password"  />
        {/* <h1>{pass}</h1> */}
        {/* <input type="text" placeholder='hjkl' value={visibility} /> */}
   
        <button onClick={changeVisibility} >{visibility ? "Hide" : "Show" }</button>

        </>
    )
}

export default App











//----------------------------------  Dark/Light theme --------------------------------

// import useChangeTheme from './Hooks'
// import './Counter.css';

// function App(){

//     const [darkMode, toggleDarkMode] = useChangeTheme(false);

//     return (
//         <>

//             <div className={darkMode ?  "dark" : "light"}>

//                 <button onClick={toggleDarkMode} >{ darkMode? "Light mode" : "Dark mode"}</button>
//                 <h1>{ darkMode? "Dark mode" : "Light mode"}</h1>

//             </div>

//         </>
//     )
// }

// export default App;