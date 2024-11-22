import express from "express"
import { newtask } from "../controllers/task";

const router = express.Router();

router.post("/new", newtask);



export default router;