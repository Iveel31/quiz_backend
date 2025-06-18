import mongoose from "mongoose";
const categoriesSchema = new mongoose.Schema({
    name:String
})
export const CategoriesModel = mongoose.model("categories",categoriesSchema)