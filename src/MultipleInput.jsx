import React, { useState } from 'react'

const MultipleInput = () => {
    const [myname ,setmyname] = useState({
        firstname:"", 
        lastname:""
    })

     const [users, setUsers] = useState([]);


    function submit(e){
        e.preventDefault()

     setUsers([...users,myname])
     setmyname({firstname:("") , lastname:("")})


    }

  return (
    <div className='w-[300px] ' >
      <form onSubmit={submit}>
     <input type="text" 
     name='firstname'
      placeholder='firstname' 
      value={myname.firstname} 
      onChange={(e)=> setmyname({...myname,[e.target.name]:e.target.value})}/>
   
    
     <input type="text" 
     name='lastname'
      placeholder='lastname' 
      value={myname.lastname} 
      onChange={(e)=> setmyname({...myname,[ e.target.name]: e.target.value})}/>
  

     <button type='submit'>submit</button>

      </form>



      <div>
  {users.map((data,i) => (
<div key={i} className='bg-black text-white my-2.5 rounded-[8px]'>
    <p>{data.firstname}</p>
    <p>{data.lastname}</p>
</div>
  ))}

      </div>
    </div>
  )
}
export default MultipleInput
