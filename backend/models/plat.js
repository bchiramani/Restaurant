// data base Model (schema)
const mongoose = require('mongoose');
//create plat schema and its attributs
const platSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    note: Number
});
//create model name and affect platSchema to it
const plat = mongoose.model("Plat", platSchema);
//on utilise le PascalCase
module.exports = plat;