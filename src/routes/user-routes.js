import express from "express"
import { createUser,getAllUser } from "../controllers/user-controller.js"

export const userRouter = express.Router()
userRouter.get('/users',getAllUser)
userRouter.post('/user',createUser)