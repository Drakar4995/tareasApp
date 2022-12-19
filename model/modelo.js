var mongoose = require("mongoose");
var uri = "mongodb://localhost/tarea";
const Tarea = require("./tarea");
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

class TareaApp {
  constructor() {
    
  }

  async borrarTodo() {
    return await Tarea.deleteMany();
  }
  async getTareas() {
    let result =  await Tarea.find();
    return result;
  }
  async agregarTarea(titulo, descripcion) {
    let tarea = new Tarea({ titulo, descripcion });
    let result = await tarea.save();
    return result;
  }

  async borrarTarea(_id) {
    let result = await Tarea.findByIdAndRemove(_id);
    if (result == null) throw new Error("Tarea no encontrado");
    else return;
  }

  async modificarTarea(id, titulo, descripcion) {
    let resultado = await Tarea.findByIdAndUpdate(id, { titulo, descripcion });
    if (resultado == null) throw new Error(`Tarea no encontrado ${id}`);
    else return await this.verTarea(id);
  }
  async verTarea(id) {
    let resultado = await Tarea.findById(id);
    if (resultado == null) throw new Error(`Tarea no encontrado ${id}`);
    else return resultado;
  }
}

module.exports = { Tarea, TareaApp };
