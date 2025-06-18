import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(cors())
app.use(express.json())
const connectDb = async () => {
    await mongoose.connect("mongodb+srv://iveelturu:<db_password>@iveel.embu1nk.mongodb.net/")
    console.log('All Database Connected')
}
connectDb()

app.listen(8000, () => {
    console.log("http://localhost:8000/")
})