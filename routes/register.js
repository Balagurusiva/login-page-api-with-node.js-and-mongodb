import express from 'express'
import { registerValidator } from '../controller/registerControl.js'

const routes = express.Router()

routes.post('/', registerValidator, (req,res) =>{
    res.json({
        "message":"succesfully signed in"
    })
})



export default routes