// import React from 'react'



// // ---------------------1. Using if...else----------------------

// function ConditionRendering (){

//         const isLoggedIn = 1;

//         if(isLoggedIn){
//             return <h1>Welcome back.</h1>
//         }
//         else{
//            return  <h1>Please Login ! </h1>
//         }
// }

// export default ConditionRendering







// --------------------- 2. Using the ternary operator ? :----------------------
// function ConditionRendering(){
//     const isLoggedIn = 1;

//     return (

//         <div>
//             {isLoggedIn ? <h1>Welcome to your profile</h1> : <h1>Please login ! </h1> }
//         </div>

//     );
// }
// export default ConditionRendering;









// --------------------- 3. Using && :----------------------

// function ConditionRendering(){
//     const isLoggedIn = 1;

//     return (
//         <div>
//             <h1>Hello</h1>
//             {isLoggedIn && <button>LoggedOut</button>}
//         </div>
//     )
// }
// export default ConditionRendering;











//  ---------------------------- Login Button ----------------------------

import { useState } from 'react'

function ConditionRendering(){
    const [isLoggedIn , setIsLoggedIn] = useState(false);

    return (
        <div>

            {isLoggedIn ? <h1>Welcome to your Profile</h1> 
                         :<h1>Please Login !</h1>
            }
            
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Log Out</button>
                         :<button onClick={()=> setIsLoggedIn(true)}>Log In</button>
            }

        </div>
    )
}

export default ConditionRendering;