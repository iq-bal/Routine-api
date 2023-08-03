require('dotenv').config()
const express = require('express');
const app = express();
const routine = require('./route/routine');
const connectDB = require('./db/connect');

app.use(express.json());

app.use('/api/routine',routine);

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000,()=>{
            console.log('listening to the port 3000...'); 
        })
    } catch (error) {
        console.log(error); 
    }
}

start(); 