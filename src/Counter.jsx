import React from 'react'
import { useState } from 'react'

const Counter = () => {
const [count ,setcount] = useState(0)
const [increaseBy , setincreaseby] = useState (1)

function increase(){
    setcount (count + increaseBy)
}
function reset(){
    setcount (0)
}
function decrease(){
    setcount (count - increaseBy)
}

function increaseByy(){

setincreaseby(increaseBy + 1)
}


  return (
    <div className='text-center'>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrease}>decrease</button>


      <main>


         <h1>{increaseBy}</h1>
      <button onClick={increaseByy}>increase</button>
      </main>
    </div>
  )
}

export default Counter
