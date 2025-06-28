import {QuizModel} from "../models/quiz-model.js"
import bcrypt from "bcrypt"

export async function getQuiz(req,res){
    try{
    const QuizData = await QuizModel.find({})
    res.status(200).json({quiz : QuizData})
    }catch(err){
        res.status(400).json({error : err})
    }
}
export async function createQuiz(req,res){
    try{
    const body=req.body
    console.log(body)
    await QuizModel.create({
    answers:body.answers,
    question:body.question,
    correctAns:body.correctAns,
    category:body.category
    })
    const quiz = await QuizModel.find()

    res.status(200).json({quiz : quiz})
    }catch(err){
        res.status(400).json({message : err})
    }

}
