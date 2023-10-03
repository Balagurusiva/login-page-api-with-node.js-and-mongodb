import express from 'express'
import bodyParser from 'body-parser' 
import regRoutes from './routes/register.js'
import loginRoutes from './routes/login.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app = express()

app.use(bodyParser.json())
app.use('/register', regRoutes)
app.use('/login', loginRoutes)
 
console.log(process.env.envmongodbURL)

mongoose
    .connect(process.env.mongodbURL)
    .then(() => {
        console.log('mongo connected')
        app.listen(process.env.PORT, () => { console.log("listending in port number 5000") })
    })
    .catch((err) => {
        console.log(err)
    })

