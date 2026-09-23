import { useState } from 'react'

const LiftingState = () => {

  const [count, setCount] = useState(0);
  return (
    <div>

      <Counter count={count} />
      <Button onClick={()=> setCount(count+1)} />
      
    </div>
  )
};

function Counter ({count}){
  return <h2>Count: {count}</h2>
}

function Button({onClick}){
  return <button onClick={onClick}>Increase</button>
}

export default LiftingState

