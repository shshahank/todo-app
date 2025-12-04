import { useEffect, useState } from 'react'
import { CreateTodo } from "./components/CreateTodo"
import { DisplayTodo } from "./components/DisplayTodo"
import { Card } from "./components/Card"
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    axios.get("http://localhost:3000/alltodos")
      .then(function (response) {
        setTodos(response.data.todos);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <div style={{ display: "flex" }}>
        {todos.map(todo => {
          return (
            <Card key={todo._id} flag={todo.flag}>
              <DisplayTodo todo={todo} setTodos={setTodos} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
