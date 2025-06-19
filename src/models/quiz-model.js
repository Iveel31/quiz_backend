import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    answers:{
        a:String,
        b:String,
        c:String,
        d:String
    },
    question:String,
    correctAns:String,
    category:String
})
export const QuizModel = mongoose.model("quiz",quizSchema)
