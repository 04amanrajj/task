const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/api.routes')
const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello world" })
})

app.use('/api', router);

app.listen(PORT, async() => {
    try {
        await connectDB();
        console.log(`server is running on http://localhost:${PORT}`)
    } catch (error) {
        console.error("Server startup error:", error.message);
    }
})