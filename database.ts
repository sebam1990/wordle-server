// Require mongoose

    const mongoose = require("mongoose")

// Connect database

    const connectDB = async () => {

        try{

            const connection = await mongoose.connect("mongodb://mongo/worldeDB")

            connection ? console.log("DB connected") : undefined
            
        }catch(error) {
            
            console.log("DB connection failed",error);

        }

    }

// Close connection

    const closeDB = async () => {

        const closeConnection = await mongoose.connection.close()
        
        closeConnection ? console.log("DB connection closed") : undefined

    }

    export {connectDB, closeDB}

