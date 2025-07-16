import React from 'react'

const ConditionalRendering = () => {
  
let greeting = false

if(greeting){
       return(
<div className='bg-purple-500 h-25'>
<h1> good morning everyone  </h1>
</div>)
   
}
else{
    return(
<div className='bg-yellow-500 h-16'>
 <h1>good evening everyone  </h1>
</div>)

    
}

}

export default ConditionalRendering
