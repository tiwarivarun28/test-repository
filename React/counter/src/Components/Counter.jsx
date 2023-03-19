import React from 'react'
import { useState ,useRef} from 'react'

export default function Counter() {
    const [count,setCount]=useState(0)
    var cR=useRef(null)
    var style={
        width:"300px",
        boxShadow:"0 0 10px red",
        padding:"20px",
        margin:"30px auto"
    }
    const startCounter=()=>{
        cR.current=setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)
    }
    const stopCounter=()=>{
        clearInterval(cR.current)
    }
  return (
    <div style={style}>
        <h2>Count : {count}</h2>
        <button onClick={startCounter}>Start</button>&nbsp;
        <button onClick={stopCounter}>Stop</button>
    </div>
  )
}
