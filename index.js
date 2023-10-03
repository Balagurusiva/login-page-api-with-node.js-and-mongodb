import express from 'express'
import bodyParser from 'body-parser'
import { PORT, mongodbURL } from './config.js'
import regRoutes from './routes/register.js'
import loginRoutes from './routes/login.js'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json())
app.use('/register', regRoutes)
app.use('/login', loginRoutes)
 


mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log('mongo connected')
        app.listen(PORT, () => { console.log("listending in port number 5000") })
    })
    .catch((err) => {
        console.log(err)
    })

