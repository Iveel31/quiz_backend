import {UserModel} from "../models/user-model.js"
import bcrypt from "bcrypt"

export async function getAllUser(req,res){
    try{
    const UserData = await UserModel.find({})
    res.status(200).json({users : UserData})
    }catch(err){
        res.status(400).json({error : err})
    }
}