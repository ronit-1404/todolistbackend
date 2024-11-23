import express from "express"
import { DeleteTask, getMyTask, newtask, UpdateTask } from "../controllers/task";
import { isAuthenticated } from "../middlewares/auth";

const router = express.Router();

router.post("/new",isAuthenticated, newtask);

router.get("/my", isAuthenticated, getMyTask);

router.route("/:id").put(isAuthenticated,UpdateTask).delete(isAuthenticated,DeleteTask)

export default router;