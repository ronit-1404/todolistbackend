import { User } from "../models/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features";
export const getAllUsers = async (req,res) => {
    const users = await User.find({});

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
};

export const register = async (req,res) => {
    const {name,email,password} = req.body;

    let user = await User.findOne({email});

    if(user) return res.status(404).json({
        success: false,
        message: "User already exist"
    });

    const hashedpassword = await bcrypt.hash(password,10)

    user = await User.create({name,email,password: hashedpassword});

    sendCookie(user,res,"Registered Succesfully", 201);
};

export const login = async (req,res,next) => {
    
    const {email,password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user)
        return res.status(404).json({
    success: false,
    message: "Invalid email or password",
    });

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
        return res.status(404).json({
        success: false,
        message: "Invalid Password",
    });

    sendCookie(user,res,`Welcome back, ${user.name}`,200)
}

export const specialFunc = (req,res) => {
    res.json({
        success: true,
        message: "demo func"
    });
};

export const getMyProfile = async (req,res) => {
    
    const id ="myid";

    //method 1
    const {token} = req.cookies;
    console.log(token);

    if(!token)
        return res.status(404).json({
            success: false,
            message: "Login first",
    })

    const decoded = jwt.verify(token,process.env.JWT_SECRET);


    //we need id to getprofile and we can get id through token which we go during login
    const user = await User.findById(decoded._id);
    res.status(200).json({
        success: true,
        user,
    })
};

export const updateUser = async (req,res) =>{
    const { id } = req.params;
    const user = await User.findById(id);
    
    res.json({
        success: true,
        message: "Updated"
    });
};

export const deleteUser = async (req,res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        message: "Deleted",
    });
};