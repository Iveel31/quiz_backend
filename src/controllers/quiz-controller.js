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
        let quiz = []
        for (let i=0; i<catID.cat.length; i++) {
            const a = await QuizModel.find({category : catID.cat[i]})
            console.log("a:",a)
            quiz.push(a)
        }
        res.status(200).json({quiz : quiz})
    }catch(err){
        res.status(400).json({error : err})
    }
}