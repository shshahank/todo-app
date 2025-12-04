const { createTodo, updateTodo, checkId, deleteTodo } = require("./input-check");

function checkTodoId(req, res, next) {
    const id = req.query.id;
    const parsedId = checkId.safeParse(id);

    if(!parsedId.success) {
        return res.status(400).json({
            msg : "You sent wrong inputs :("
        })
    }
    next();
}

// Input validation for creating the todo
function checkCreateTodo(req, res, next) {
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);

    if(!parsedPayload.success) {
        return res.status(400).json({
            msg : "You sent wrong inputs :("
        })
    }

    next();
}


// Input validation for udpdating the todo
function checkUpdateTodo(req, res, next) {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    
    if(!parsedPayload.success) {
        return res.status(400).json({
            msg : "You sent wrong inputs :("
        })
    }
    next();
}

// Input validation for deleting the todo
function checkDeleteTodo(req, res, next) {
    const payload = req.body;
    const parsedPayload = deleteTodo.safeParse(payload);

    if(!parsedPayload.success) {
        return res.status(400).json({
            msg : "You sent wrong input :("
        })
    }
    next();
}

module.exports = {
    checkCreateTodo, checkUpdateTodo, checkTodoId, checkDeleteTodo
}