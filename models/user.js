import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        select: false,
    },
    createdAt: {
        type: Date,
        default: DataTransfer.now,
    }
});

export const User = mongoose.model("User", schema)