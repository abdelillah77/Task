const mongoose = require('mongoose');
const Task = mongoose.model(
    "Task",
    new mongoose.Schema({
        title: { type: String, unique: true, required: true, max: 72 },
        content: { type: String, required: true, max: 250 },

    })
);





module.exports = Task;