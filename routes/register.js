import express from 'express'
import { registerValidator } from '../controller/registerControl.js'

const routes = express()

routes.post('/', registerValidator, (req,res) =>{
    res.json({
        "message":"succesfully logged in"
    })
})

export default routes