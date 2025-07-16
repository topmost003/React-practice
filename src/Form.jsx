import { useState } from "react"


const Form = () => {
 const [myname ,setName] = useState ([])




  return (
    <div>
    <form className="grid">
  <input type="text" name="name"  placeholder="enter your name" value={myname} onChange={(e)=>setName(e.target.value)}/>


    </form>
 


    
    </div>
  )
}

export default Form
