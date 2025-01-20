import { useState } from 'react'
import './App.css'

function counter() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div className='card'>
    <h1>Counter App</h1>
    <button>{count}</button>
    <div>
      <button onClick={()=>{
        if(count >= 20){
          alert('Cannot exceed from this value')
        }else{
          setCount(count + 1)
        }
      }}>Increase</button>
      <button onClick={()=>{
        if(count <= 0){
          alert("Cannot go below 0")
        }else{
          setCount(count - 1)
        }
      }
      }>Decrease</button>
    </div>
    </div>
     
    </>
  )
}

export default counter
