import React, { useState } from 'react'

const FormHandling = () => {
 const [userdetails ,setuserdetails] = useState ({
username :"",
password :"",

}) 

  const updateForm = (e) => {
    setuserdetails({
      ...userdetails,
      [e.target.name]: e.target.value,
  });
  };

 


  return (
    <div>
      <h1>FORM HANDLING </h1>

      <form className='grid'>
<label htmlFor="">USERNAME</label>
<input type="text" className='border-2 w-[200px]' name='username' value={userdetails.username}  onChange={updateForm}/>


<label htmlFor="">PASSWORD</label>
<input type="text" className='border-2 w-[200px]' name='password'  value={userdetails.password}  onChange={updateForm} />

<button type='submit' className='w-[100px] mt-2.5 bg-amber-400'>SUBMIT</button>
      </form>


<div>
{userdetails.map((data,i)=> (
    <div key={i} className='bg-yellow-500'>
 <p>{data.username}</p>
 <p>{data.password}</p>

    </div>
))

}

</div>
    </div>
  )
}

export default FormHandling
