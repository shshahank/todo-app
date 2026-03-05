import axios from "axios";
import { Card } from "./Card";
import API_URL from "../config";

export function DisplayTodo({ todo, setTodos }) {

    async function refreshTodos() {
        const res = await axios.get(`${API_URL}/alltodos`);
        setTodos(res.data.todos);
    }

    async function updateFlag() {
        if (todo.flag) return;
        await axios.put(`${API_URL}/done`, { id: todo._id });
        await refreshTodos();
    }

    async function deleteTodo() {
        await axios.delete(`${API_URL}/delete`, {
            data: { id: todo._id }
        });
        await refreshTodos();
    }

    return (
        <div>

            <Card flag={todo.flag}>
                <h2 className="text-xl font-bold">{todo.title}</h2>
                <h3 className="text-md opacity-90">{todo.task}</h3>
            </Card>

            <div className="flex justify-between px-2 mt-4">

                <button
                    onClick={updateFlag}
                    className={
                        "px-5 py-2 rounded-full text-black shadow-sm transition border-2 " +
                        (todo.flag
                            ? "bg-green-400/90 hover:bg-green-600 border-green-600"
                            : "bg-yellow-300 hover:bg-yellow-400 border-yellow-700")
                    }
                >
                    {todo.flag ? "Done!" : "Mark as Done ?"}
                </button>

                <button
                    onClick={deleteTodo}
                    className="px-5 py-2 rounded-full text-black bg-red-400/90 border-2 border-red-700 hover:bg-red-600 transition shadow-sm"
                >
                    Delete
                </button>

            </div>
        </div>
    );
}