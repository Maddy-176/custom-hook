import React,{useEffect, useState} from 'react'
import useSkipFirstRender from '../customHooks/useSkipFirstRender'

function Counter() {

  const [count, setCount] = useState(0)
  const [docHeader, setDocHeader]=useState("")

  const isRendered= useSkipFirstRender();

  useEffect(()=>{
    isRendered?setDocHeader("Subsequent Render"):setDocHeader("First Render")
  },[count])


   

  return (
    <div>
    <h1>{docHeader}</h1>
    <br></br>
    <h3>
      You Clicked: {count} times
    </h3>
    <br/>
    <button onClick={()=>setCount(prev=>prev+1)} data-testid="counter-btn">Click</button>

    </div>
  )
}

export default Counter