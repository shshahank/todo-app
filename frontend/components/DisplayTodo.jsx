import axios from "axios"

export function DisplayTodo({todo, setTodos}) {

    async function updateFlag() {
        if(todo.flag) return;

        await axios.put("http://localhost:3000/done", {
            id : todo._id
        });

        const response = await axios.get("http://localhost:3000/alltodos");
        setTodos(response.data.todos);
    }

    return (
        <div style={{display : "grid", alignContent: "center"}}>
            <h2 style={{margin : 5}}> {todo.title} </h2>
            <h3 style={{margin : 5}}> {todo.task} </h3>
            <button onClick={updateFlag} style={{margin : 5, padding : 5}}>
                {(todo.flag) ? "Done!" : "Mark as done ?"}
            </button>
        </div>
    )
}