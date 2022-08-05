import express from "express"
import dotenv from "dotenv"
import Layout from "./routes/routes.js"
import connectDB from "./config/connectDB.js"
import errorHandler from "./middleware/errorHandler.js"


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 8000

connectDB();

app.use("/", Layout)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})