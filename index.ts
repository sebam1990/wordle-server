// Import express

    const express = require("express")

    const app = express()

// Read and parse data

    app.use(express.json())

// Use user route

    app.use("/", require("./routes/userRoute.ts"))

// Set listen port

    app.listen(3000)

    console.log("Server started")