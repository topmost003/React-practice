import { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function submit(e) {
    e.preventDefault();
    setTodos([...todos, { todo }]);
    setTodo("");
    // console.log(todo)
  }

  function removeTodo(remove) {
    setTodos(todos.filter((todo) => todo !== remove));
  }

  return (
    <div className="m-auto w-[1220px]  mt-6">
      <form onSubmit={submit}>
        <input
          type="text"
          required
          placeholder="enter todo list..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className=" px-4  py-2 bg-red-400 outline-0" type="submit">
          add
        </button>
      </form>

      <div className="pt-7 grid">
        {todos.map((data, i) => (
          <div
            key={i}
            className="  bg-purple-400 my-2 p-3   rounded-2xl w-[300px]"
          >
            <li className="flex justify-between">
              {data.todo}
              <span>
                <button onClick={() => removeTodo(data)}>❌</button>
              </span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
