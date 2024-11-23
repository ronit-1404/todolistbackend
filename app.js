import express from "express";
import UserRouter from "./routes/user.js"
import taskrouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
export const app = express();
config({
    path: "./data/config.env",
});

app.use(express.json())
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credential: true,
    })
);


app.use("/api/v1/user", UserRouter);
app.use("/api/v1/task", taskrouter);


//using routes

app.get("/", (req,res) => {
    res.send("Working perfectly");
})