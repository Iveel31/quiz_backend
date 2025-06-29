import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    answers:[
        {
            ans:String,
            isCor:Boolean
        }
    ],
    question:String,
    category:String
})
export const QuizModel = mongoose.model("quiz",quizSchema)
