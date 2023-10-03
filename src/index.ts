// Import database connection

    require("./database.ts")

// Configure server

    const express = require("express")

    const app = express()

// Set listen port

    app.listen(3000)

    console.log("Server starting")
    