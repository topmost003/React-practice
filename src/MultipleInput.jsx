import React, { useState } from 'react'

const MultipleInput = () => {
    const [myname ,setmyname] = useState({
        firstname:"", 
        lastname:""
    })

    const [user,setusers] =([])

    function submit(e){
        e.preventDefault()
    }

  return (
    <div>
      <form className='grid gap-2.5'  >
     <input type="text" 
      placeholder='firstname' 
      value={myname.firstname} 
      onChange={(e)=> setmyname({...myname,firstname:e.target.value})}/>



     <input type="text" 
      placeholder='lastname' 
      value={myname.lastname} 
      onChange={(e)=> setmyname({...myname,lastname:e.target.value})}/>

     <button onClick={submit}>submit</button>

      </form>



      {/* <div>
  {myname.map((data,i) => (
<div key={i}>
    <p>{data.firstname}</p>
    <p>{data.lastname}</p>
</div>
  ))}

      </div> */}
    </div>
  )
}
export default MultipleInput
