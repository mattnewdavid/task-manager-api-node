const express = require('express')
const app = express()
const tasks = require('./routes')
const connectDB = require("./database/connect");
require('dotenv').config()
const notExist = require('./middlewares/404')
const errorHandler = require("./middlewares/error-handler");

//middlewares
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks);

// 404
app.use(notExist)

//error handler
app.use(errorHandler)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening at port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()
