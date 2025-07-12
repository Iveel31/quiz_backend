import express from "express";
import {
  getQuiz,
  createQuiz,
  getQuizByCat,
} from "../controllers/quiz-controller.js";
export const quizRouter = express.Router();
quizRouter.get("/quiz", getQuiz);
quizRouter.post("/createQuiz", createQuiz);
quizRouter.post("/QuizByCat", getQuizByCat);
