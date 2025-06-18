import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    number:Number,
    email:String,
    userName:String,
    password:String
})
export const UserModel = mongoose.model("user",userSchema)