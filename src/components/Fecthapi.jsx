import { useState,useEffect } from "react"


const Fecthapi = () => {
  const [fetchapi , setFetchapi] = useState([])

  const postapi = async()  => {
    await  fetch ("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
           .then((data) => setFetchapi(data))
  }

  console.log(fetchapi)


    useEffect(() => {
    postapi();
  }, []);




  return (
    <div >
 <h1 className=" text-center">FETCH API CONSUMPTION</h1>

   <div className="grid grid-cols-5">
{fetchapi.map((data ,i) => (
   <main className=" bg-amber-400 m-[10px] h-[250px]" key={i}>
    <p className="text-white p-[5px]">{data.title}</p>
    <p>{data.body}</p>
   </main>
  ))
  } 
      

   </div>


  
    </div>
  )
}

export default Fecthapi
