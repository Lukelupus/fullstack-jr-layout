import express from "express"
import dotenv from "dotenv"
import Layout from "./routes/routes.js"


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT || 8000


app.use("/", Layout)


app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})