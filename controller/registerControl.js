import express from 'express'
import { UsersId } from '../models/userIdModel.js'
import { Validator } from 'node-input-validator'

export const registerValidator = (req, res, next) => {

    const validator = new Validator(req.body, {
        email: 'required|email',
        password: 'required|minLength:8'
    })

    validator 
        .check()
        .then((matched) => {
            if (!matched) {
                res.status(422).send("not vlaid data");
            } else {
                next()
            }
        })

}