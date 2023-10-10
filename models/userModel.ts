// Import dependencies

    import {Schema, model} from "mongoose"

// Create schema

    const userSchema = new Schema({

        id: String,
        email: String,
        password: String,

    })

// Create and export model

    const user = model("user", userSchema)

    export default user