
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

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));

//  ---------------------------- Login Button ----------------------------

import { useState, useEffect } from "react";
import { data } from "react-router-dom";

function ConditionRendering() {
  //     const [isLoggedIn , setIsLoggedIn] = useState(false);
  //     let obj = {
  //         "name":"Avneesh"
  //     }

  //      fetch("https://jsonplaceholder.typicode.com/users")
  //                  .then(res => res.json())
  //                  .then(data => console.log(data));

  //     return (
  //         <div>

  //             {/* {isLoggedIn ? <h1>Welcome to your Profile</h1>
  //                          :<h1>Please Login !</h1>
  //             }

  //             {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Log Out</button>
  //                          :<button onClick={()=> setIsLoggedIn(true)}>Log In</button>
  //             } */}

  //             <h1>{data.name}</h1>

  //         </div>
  //     );
  // }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div>
      {" "}
      <h1>Products</h1>{" "}
      <div className="products">
        {" "}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {" "}
            <img src={product.thumbnail} alt={product.title} />{" "}
            <h2>{product.title}</h2> <p>{product.description}</p>{" "}
            <p>Price: ${product.price}</p>{" "}
            <p>Rating: ⭐ {product.rating}</p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default ConditionRendering;
