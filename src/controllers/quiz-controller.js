import { CategoriesModel } from "../models/categories-model.js"
import {QuizModel} from "../models/quiz-model.js"

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

export async function getQuizByCat(req,res){
    try{
        const catID = req.body
        console.log(catID)
        const quiz = []
        for (const i=0; i<catID.cat.size(); i++) {
            const a = await QuizModel.find({category : catID.cat[i]})
            quiz.push(a)

        }
        res.status(200).json({quiz : quiz})
    }catch(err){
        res.status(400).json({error : err})
    }
}