import mongoose from "mongoose"
import { PostModel } from "../Models/PostModel.js"


export const ConnectDB = () => {

    mongoose.connect("mongodb+srv://mfk:test123@portfolio.lsuj3bc.mongodb.net/postAzon?retryWrites=true&w=majority&appName=Portfolio")
        .then(res => {

            console.log("DB Connected")
            PostModel.find()
                .then(result => console.log(result[0].caption))
                .catch(er => console.log(er))

        })
        .catch(er => console.log(er))
}