const mongo = require("mongoose");
require("dotenv").config();

// Connect to DB
async function connectDB() {
    try {
        await mongo.connect(process.env.DB_URL);
        console.log("Backend connected to database :)");
    }
    catch(err) {
        console.log("Failed to connect to DB :(");
        console.error(err);
    }
}

// Todo schema { title, task, flag }
const todoSchema = new mongo.Schema({
    title : { type: String, required: true },
    task  : { type: String, required: true },
    flag  : { type: Boolean, default: false }
});

const todos = mongo.model("todos", todoSchema);

module.exports = {
    connectDB,
    todos
};
