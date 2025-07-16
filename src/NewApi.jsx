import axios from "axios"
import { useEffect, useState } from "react"

const NewApi = () => {
 const [user , setuser] = useState([])

 const getuserdata = async()=> {
                     const res = await axios.get ("https://user-data-ci61.onrender.com/user/viewalluser")
                    setuser (res.data.data)
                }


 useEffect(()=> {
getuserdata() 
 },[])


  return (
    <div className="grid grid-cols-5 gap-5 p-2 m-2.5 max-w-md:grid max-md:grid-cols-3 max-sm:grid max-sm:grid-cols-1" >
 {user.map((data,i)=> (
    <div key={i} className=" bg-blue-600 w-[200px] h-[80px] p-2.5 text-white flex items-center gap-2.5 " >
 <main>
  <p>{data.username.charAt(0)}</p>
 </main>

 <main>
    <h2>{data.username}</h2>
    <p>{data.email}</p>
 </main>


    </div>



 )
  )}




    </div>
  )
}

export default NewApi
