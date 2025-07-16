import React from 'react'

const Cards = () => {
 
const card = [{
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },

    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },

    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },


    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },

    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },

    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#123456",
    },


]


  return (
    <div className='grid grid-cols-2 gap-[50px] px-[100px] '>
      { card.map((data,i)=>(
     <div key={i} className='w-[300px] bg-green-600'>
    <p>{data.title}</p>
    <p>{data.desc}</p>
    <button>{data.btnTitle}</button>
    <p>{data.color}</p>
     </div>


      ))}



    </div>
  )
}

export default Cards
