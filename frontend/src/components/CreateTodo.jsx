import axios from "axios";
import { useRef } from "react";

export function CreateTodo({ setTodos }) {
    const titleRef = useRef();
    const taskRef = useRef();

    async function addTodo() {
        const title = titleRef.current.value.trim();
        const task = taskRef.current.value.trim();

        if (!title || !task) {
            alert("Input box is empty :(");
            return;
        }

        await axios.post("http://localhost:3000/todo", { title, task });

        const response = await axios.get("http://localhost:3000/alltodos");
        setTodos(response.data.todos);

        // Clear inputs
        titleRef.current.value = "";
        taskRef.current.value = "";
    }

    return (
        <div className="grid grid-cols-3 gap-6 p-5 place-items-center">

            <input
                className="border-2 w-56 h-14 p-3 rounded-lg shadow-2xl"
                type="text"
                placeholder="Add title"
                ref={titleRef}
            />

            <input
                className="border-2 w-56 h-14 p-3 rounded-lg shadow-2xl"
                type="text"
                placeholder="Add task"
                ref={taskRef}
            />

            <button
                className="border-2 border-black w-40 h-12 p-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                onClick={addTodo}
            >
                Add Todo
            </button>
        </div>
    );
}
