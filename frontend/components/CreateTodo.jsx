import axios from "axios";
import { useRef } from "react";

export function CreateTodo({setTodos}) {
    const titleRef = useRef();
    const taskRef = useRef();

    async function addTodo() {
        const title = titleRef.current.value;
        const task = taskRef.current.value;

        if(!title || !task) {
            alert("Input box is emtpy :(");
            return;
        }

        const newTodo = {
            title, task
        }

        // Post new todo
        await axios.post("http://localhost:3000/todo", newTodo);

        // get the updated todo list
        const response = await axios.get("http://localhost:3000/alltodos");
        setTodos(response.data.todos);
    }

    return(
        <div>
            <input style= {{margin : 5, padding : 3}} type="text" placeholder="Add title" ref={titleRef} /> <br />
            <input style= {{margin : 5, padding : 3}} type="text" placeholder="Add task" ref={taskRef} /> <br />
            <button style= {{margin : 5, padding : 3}} onClick={addTodo} > Add Todo </button>
        </div>
    )
}