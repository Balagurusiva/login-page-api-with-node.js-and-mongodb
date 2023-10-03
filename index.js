import express from 'express'
import { PORT, mongodbURL } from './config.js'
import regRoutes from './routes/register.js'
import mongoose from 'mongoose'

const app = express()

app.use('/register', regRoutes)


mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log('mongo connected')
        app.listen(PORT, () => { console.log("listending in port number 5000") })
    })
    .catch((err) => {
        console.log(err)
    })

