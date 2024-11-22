import express from "express"
import { register } from "module";
 import{
    getAllUsers,
    getUserDetails,
    login,
    register
} from "../controllers/user.js"

const router = express.Router();

router.get("/all",getAllUsers)

router.post("/new", register);
router.post("/login", login);

router
    .route("/userif/:id")
    .get(getUserDetails)
//     .put(updateUser)
//     .delete(deleteUser);


export default router;