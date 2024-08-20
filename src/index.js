import dotenv from "dotenv"
import { connectDB } from "./db/index.js"
import { app } from "./app.js";

dotenv.config(
    {
        path: "./.env"
    }
)


connectDB()
.then( () => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Mongodbserver is running at port ${process.env.PORT}`);
    })
})
.catch( (error) => {
    console.log("MongoDB Connection failed...", error);    
})




