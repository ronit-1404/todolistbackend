import express from "express"
import { register } from "module";
 import{
    getAllUsers,
    getMyProfile,
    login,
    register
} from "../controllers/user.js"

const router = express.Router();

router.get("/all",getAllUsers)

router.post("/new", register);
router.post("/login", login);

router.get("/me",getMyProfile)
//     .put(updateUser)
//     .delete(deleteUser);


export default router;