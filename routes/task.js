import express from "express"
import { getMyTask, newtask } from "../controllers/task";
import { isAuthenticated } from "../middlewares/auth";

const router = express.Router();

router.post("/new",isAuthenticated, newtask);

router.get("/my", isAuthenticated, getMyTask)

export default router;