// data base Model (schema)
const mongoose = require('mongoose');
//create chef schema and its attributs
const chefSchema = mongoose.Schema({
    name: String,
    speciality: String,
    experience: Number
});
//create model name and affect chefSchema to it
const chef = mongoose.model("Chef", chefSchema);
//on utilise le PascalCase
module.exports = chef;