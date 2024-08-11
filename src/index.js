import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import express from "express";


dotenv.config(
    {
        path: "./.env"
    }
)

const app = express()

connectDB()
.then( () => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Mongodbserver is running at port ${process.env.PORT}`);
    })
})
.catch( (error) => {
    console.log("MongoDB Connection failed...", error);    
})




