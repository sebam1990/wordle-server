// Import dependencies

    const {response} = require("express")

// Import models

// Import db connection

    import {connectDB, closeDB} from "../database"

// Register new user

    export const createUser = (req:any, res:any = response) => {

        // Get response data

            const {email, password} = req.body

        // Save data in DB

            res.status(201).json({

                msg: "User created",
                user: {email, password}

            })

    }

// Find user by email

    export const findByEmail = (req:any, res:any = response) => {

        //connectDB()

        res.status(201).json({

            msg: "Verified email"

        })

       //closeDB()

    }

// User login

    export const loginUser = (req:any, res:any = response) => {

        res.status(201).json({

            msg: "User logged in",
            user: req.body

        })

    }

// List users

    export const listUsers = (req:any, res:any = response) => {

        res.status(200).json({

            msg: "List of users"

        })

    }