import { useState,useEffect } from 'react'

const Marketplace = () => {
 const [getpost , setgetPost] =  useState([])

 const postget = async() => {
        await fetch (" https://fakestoreapi.com/products")
              .then ((res) => res.json())
              .then ((data) => setgetPost(data))
 }

//  console.log(getpost)

useEffect(() => {
    postget()
},[])


  return (
   
<div>

    <h1 className='text-center'>ECOMMERCE ONLINE STORE</h1>

 <div className='grid grid-cols-4 gap-2.5 px-[50px] '>
     {getpost.map((data ,i)=> (
        <div className='w-[300px] h-[400px] m-[20px] border-2 p-[10px]' key={i}>
        <img src={data.image} alt=""  className='w-[200px] h-[200px]'/>
        <h1 className='p-[10px]'>{data.category}</h1>
        <p>{data.title}</p>
        </div>
     )
    
    )
     
     } 

    </div>
</div>



  )
}

export default Marketplace
