const z = require("zod");

const checkId = z.string();

// Create todo schema { title, task }
const createTodo = z.object({
    title : z.string(),
    task : z.string()
});

// Update todo schema { id }
const updateTodo = z.object({
    id : z.string()
});

// Input check for deleteTodo { id }
const deleteTodo = z.object({
    id : z.string()
})

module.exports = {
    createTodo, updateTodo, checkId, deleteTodo
}

