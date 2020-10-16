const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;


db.tasks = require("./task.model");
module.exports = db;