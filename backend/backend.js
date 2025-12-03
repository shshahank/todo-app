const express = require("express");
const { checkCreateTodo, checkUpdateTodo, checkTodoId } = require("./middlewares");
const { connectDB, todos } = require("./database");
const app = express();
const port = 3000;

// Connect DB
connectDB();

app.use(express.json());

// Root route
app.get("/", function(req, res) {
    res.send("Hello this is a simple todo-app :)");
});

// Get all todos
app.get("/alltodos", async function(req, res) {
    try {
        const response = await todos.find();
        res.status(200).json({
            todos : response
        })
    } catch(err) {
        console.log("Something's up with DB");
        console.error(err);
        return res.status(500).json({
            msg : "DB error",
            todos : null
        });
    }
});

// Get single todo by id
app.get("/todos", checkTodoId, async function(req, res) {
    const id = req.query.id;

    try {
        const response = await todos.findById(id);

        // if id is invalid, response wil be null, therefore return with proper status code
        if (!response) {
            return res.status(404).json({
                msg: "Todo not found",
                todo: null
            });
        }

        // If found, return success
        return res.status(200).json({
            todo : response
        });

    } catch(err) {
        console.error(err);
        return res.status(500).json({
            msg : "DB Error",
            todo : null
        });
    }
});


// Create todo
app.post("/todo", checkCreateTodo, async function(req, res) {
    const payload = req.body;
    try {
        await todos.create({
            title : payload.title,
            task : payload.task
        });
    
        res.status(201).json({
            msg : "Todo added to DB :)"
        })
    } catch(err) {
        console.log("Something's up with DB");
        console.error(err);
        return res.status(500).json({
            error: "DB error"
        });
    }

});

// Update todo
app.put("/done", checkUpdateTodo, async function(req, res) {
    try {
        await todos.updateOne({
            _id : req.body.id
        }, {
            flag : true
        });
    
        res.status(200).json({
            msg : "Todo updated"
        })
    } catch(err) {
        console.log("Something's up with DB");
        console.error(err);
        return res.status(500).json({
            error: "DB error"
        });
    }
});

// Handle unknown route
app.use((req, res) => {
    res.status(404).json({ msg: "Route not found" });
});

// global error catcher
app.use((err, req, res, next) => {
    res.status(500).json({ msg: "Something went wrong" });
});

app.listen(port, ()=> {
    console.log("Todo-app backend live on port : " + port);
});