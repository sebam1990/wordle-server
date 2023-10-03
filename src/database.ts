// Require mongoose

    const mongoose = require("mongoose")

// Connect database

    mongoose.connect("mongodb://mongo/worldeDB")
        .then(console.log("DB Connected"))
        .catch((error:any) => console.log("DB connection failed",error))

