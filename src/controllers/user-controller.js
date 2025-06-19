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

export async function createUser(req,res){
    try{
    const body=req.body
    console.log(body)
    const hashedPassword = await bcrypt.hash(body.password || "" , 10)
    await UserModel.create({
        userName:body.userName,
        number:body.number,
        email:body.email,
        password:hashedPassword
    })
    const users = await UserModel.find()

    res.status(200).json({user: users})
    }catch(err){
        res.status(400).json({message : err})
    }

}
