import express from "express"
import { getCategories, createCategories } from "../controllers/categories-controller.js"
export const catRouter = express.Router()
catRouter.get('/categories', getCategories)
catRouter.post('/createCat', createCategories)