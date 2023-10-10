// Import dependencies

    const express = require("express")

    const {response} = require("express")

// Import models

// Import db connection

    import {connectDB, closeDB} from "../database"

// Register new user

    export const createUser = (req:any, res:any = response) => {

        const {email, password} = req.body

        res.json({

            msg: "User created",
            user: {email, password}

        })


    }

// Find user by email

    export const findByEmail = (req:any, res:any = response) => {

        //connectDB()

        res.json({

            msg: "Verified email"

        })

       //closeDB()

    }

// User login

    export const loginUser = (req:any, res:any = response) => {

        res.json({

            msg: "User logged in",
            user: req.body

        })

    }

// List users

    export const listUsers = (req:any, res:any = response) => {

        res.json({

            msg: "List of users"

        })

    }