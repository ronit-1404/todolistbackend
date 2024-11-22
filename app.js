import express from "express";
import UserRouter from "./routes/user.js"
import taskrouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
export const app = express();
config({
    path: "./data/config.env",
});

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/task", taskrouter);
app.use(cookieParser());

//using routes
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Working perfectly");
})