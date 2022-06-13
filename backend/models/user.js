// data base Model (schema)
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
//create user schema and its attributs
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    tel: String,
    role: String
});
userSchema.plugin(uniqueValidator);
//create model name and affect userSchema to it
const user = mongoose.model("user", userSchema);
//on utilise le PascalCase
module.exports = user;