var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = Schema({
titulo: { type: String, required: true }, descripcion: { type: String, required: true },
});
module.exports = mongoose.model('Tarea', schema);