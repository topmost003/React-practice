import React, { useState } from 'react'

const MultipleInput = () => {
    const [myname ,setmyname] = useState({
        firstname:"", 
        lastname:""
    })

  return (
    <div>
      <form >
     <input type="text" 
      placeholder='firstname' 
      value={myname.firstname} 
      onChange={(e)=> setmyname({...myname,firstname:e.target.value})}/>



     <input type="text" 
      placeholder='lastname' 
      value={myname.lastname} 
      onChange={(e)=> setmyname({...myname,lastname:e.target.value})}/>



      </form>
    </div>
  )
}
export default MultipleInput
