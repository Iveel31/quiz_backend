import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    answers:Array,
    question:String,
    correctAns:Number,
    category:String
})
export const QuizModel = mongoose.model("quiz",quizSchema)