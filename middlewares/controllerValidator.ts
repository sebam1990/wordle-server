const {response} = require("express")

import {validationResult} from "express-validator"

export const controllerValidator = (req:any, res = response, next:any) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {

        return res.status(400).json({

            errors: errors.mapped()

        })

    }

    next()

}