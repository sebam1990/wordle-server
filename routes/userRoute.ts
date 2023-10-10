// Import dependencies

    const {Router} = require("express")

    const router = Router()

    import {check} from "express-validator"

// Import controllers functions

    import {createUser, findByEmail, listUsers, loginUser} from "../controllers/userController"

// Import controller validation

    import { controllerValidator } from "../middlewares/controllerValidator"

// createUser

    router.post("/users/new", 
        
        [

            check("email", "The email is required and must respect the email format").isEmail(),
            check("password", "The password is required").not().isEmpty(),
            controllerValidator
        ],
        
        createUser
        
    )

// findByEmail

    router.post("/users/email", 
    
        [

            check("email", "The email is required and must respect the email format").isEmail(),
            controllerValidator

        ],
    
        findByEmail
    
    )

// loginUser

    router.post("/users/login", 
        
        [

            check("email", "The email is required and must respect the email format").isEmail(),
            check("password", "The password is required").not().isEmpty(),
            controllerValidator

        ], 
        
        loginUser
    
    )

// listUsers

    router.get("/users", listUsers)

// Export router

    module.exports = router