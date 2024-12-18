import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,statuscode=200) => {
    const token = jwt.sign({_id: user._id},process.env.JWT_SECRET);
    //if we want to login just after register directly we use cookie for such process but first we need to generate token(shown in above process)
    res.status(201).cookie("token",token,{
        httpOnly: true,
        maxAge: 15*60*100,//15min
        sameSite: process.env.NODE_ENV==="Developement"? "lex" : "none",
        secure: process.env.NODE_ENV==="Developement"? false : true,
    }).json({
        success: true,
        message,
    });
}