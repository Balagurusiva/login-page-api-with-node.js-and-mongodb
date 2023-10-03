import express from 'express'
import { loginValidator } from '../controller/loginController.js'
import { registerValidator } from '../controller/registerControl.js'

const routes = express.Router()

routes.post('/',loginValidator, (req,res) =>{
    res.status(200).json({
        "message":'succesfully logged in and welcome bak',
    })
})

export default routes