const mongoose = require('../db.js')

const userSchema = new mongoose.Schemda({
    username: {
        type: String,
        required: true,
    }
})