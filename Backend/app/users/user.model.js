const mongoose = require('mongoose');
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: { type: String, unique: true, required: true, min: 8, max: 32 },
        password: { type: String, required: true },

    })
);





module.exports = User;