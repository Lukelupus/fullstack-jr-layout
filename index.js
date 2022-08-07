import express from "express"
import dotenv from "dotenv"
import Layout from "./routes/routes.js"
import connectDB from "./config/connectDB.js"
import errorHandler from "./middleware/errorHandler.js"

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(allowCrossDomain);




const PORT = process.env.PORT || 8000

connectDB();

app.use("/", Layout)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})