import express from "express"
import { createUser,getAllUser, getUser } from "../controllers/user-controller.js"
import {login} from "../controllers/login-controller.js"
import { verifyToken } from "../middleWare/middleware.js"
export const userRouter = express.Router()
userRouter.get('/users', getAllUser)
userRouter.get('/getUser',verifyToken,getUser)
userRouter.post('/user',createUser)
userRouter.post('/login',login)
