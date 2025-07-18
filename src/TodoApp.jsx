import { useState } from "react"


const TodoApp = () => {
  const [todo , setTodo] = useState("")
  const [todos , setTodos] = useState ([])


  function submit(e) {
e.preventDefault()
  setTodos([...todos,{todo}])
  setTodo("")
  // console.log(todo)
  }

  return (
    <div className="m-auto w-[1220px]  mt-6">
   
  <form onSubmit={submit} >
    <input type="text" 
    required
    placeholder="enter todo list..."
      onChange={(e)=> setTodo(e.target.value)}
      value={todo}/>
    <button 
    className=" px-4  py-2 bg-red-400 outline-0"
    type="submit">add</button>
  </form>


<div className="pt-7 grid grid-cols-4">
{todos.map((data,i) => (
    <div key={i} className="  bg-amber-400 my-2 p-3   rounded-2xl w-[300px]">
     <li>{data.todo}</li> 
    </div>
  ))}
</div>



  
      
    </div>
  )
}

export default TodoApp
