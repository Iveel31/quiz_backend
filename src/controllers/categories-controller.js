import {CategoriesModel} from "../models/categories-model.js"
import bcrypt from "bcrypt"

export async function getCategories(req,res){
    try{
    const CategoriesData = await CategoriesModel.find({})
    res.status(200).json({categories : CategoriesData})
    }catch(err){
        res.status(400).json({error : err})
    }
}

export async function createCategories(req,res){
    try{
    const body=req.body
    console.log(body)
    await CategoriesModel.create({
    name : body.name
    })
    const categories = await CategoriesModel.find()

    res.status(200).json({category: categories})
    }catch(err){
        res.status(400).json({message : err})
    }

}
