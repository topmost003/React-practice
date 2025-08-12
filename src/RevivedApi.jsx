import axios from "axios"
import { useState,useEffect } from "react"

const RevivedApi = () => {
 const [user ,setuser] = useState([])

 const getusers = async ()=>{
 const res = await axios.get("https://fakestoreapi.com/products");
  setuser(res.data);
  console.log(res)
 }


 useEffect(()=>{
  getusers()
 },[])


  return (
    <div>
      <h1 className="text-center py-5">api revised</h1>

      <div className=" grid grid-cols-4 px-[100px] gap-7">
        {user?.map((data, i) => (
          <div key={i} className="w-[250px]">
            <img src={data.image} alt=""  className="w-[200px] h-[200px]"/>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>{data.descriptin}</p>
            <p>{data.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevivedApi
