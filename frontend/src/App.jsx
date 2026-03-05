import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { DisplayTodo } from "./components/DisplayTodo";
import axios from "axios";
import API_URL from "./config";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await axios.get(`${API_URL}/alltodos`);
      setTodos(res.data.todos);
    }
    fetchTodos();
  }, []);

  return (
    <div className="font-sans text-lg p-6 bg-gray-50 min-h-screen">

      <CreateTodo setTodos={setTodos} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {todos.map((todo) => (
          <DisplayTodo key={todo._id} todo={todo} setTodos={setTodos} />
        ))}
      </div>

    </div>
  );
}

export default App;