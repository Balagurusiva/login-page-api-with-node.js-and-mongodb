import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email:{
           type:String,
            required:true,
        },
        password:{
           type:String,
            required:true,
        }
    }
)

export const UsersId = mongoose.model("UsersID", userSchema)