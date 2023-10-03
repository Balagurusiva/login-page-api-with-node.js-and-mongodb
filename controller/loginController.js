import { UsersId } from "../models/userIdModel.js"


export const loginValidator = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    const result = await UsersId.findOne({$and : [{ email: email }, {password:password}]})
 
             if(!result){
                res.json({
                    "error":"invalid data"
                })
             }else{
                next()
             }

}