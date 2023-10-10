// Import dependencies

    const {Router} = require("express")

    const router = Router()

// Import controllers functions

    import {createUser, findByEmail, listUsers, loginUser} from "../controllers/userController"

// createUser

    router.post("/users/new", createUser)

// findByEmail

    router.post("/users/email", findByEmail)

// loginUser

    router.post("/users/login", loginUser)

// listUsers

    router.get("/users", listUsers)

// Export router

    module.exports = router