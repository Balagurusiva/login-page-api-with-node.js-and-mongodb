import express from 'express'

const routes = express()

routes.post('/', (req,res) =>{
    res.send('yes got it')
})

export default routes