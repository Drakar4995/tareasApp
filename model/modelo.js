const Tarea = require('./tarea');

class TareaApp{
    tareas = []
    lastId = 0;
    constructor() {
    }

    async borrarTareas(){
        return await Tarea.deleteMany({});
    }
    async getTareas(){
        return await Libro.find(); 
    }
    async agregarTareas(titulo, descripcion) {
        let tarea = new Tarea({ titulo, descripcion });
        return await tarea.save();
    }

    async borrarTarea(_id) {
        let result = await Tarea.findByIdAndRemove(_id)
        if (result == null) throw new Error('Tarea no encontrado'); else return;
    }

    async modificarTarea(id, titulo, descripcion) {
        let resultado = await Libro.findByIdAndUpdate(id, { titulo, descripcion });
        if (resultado == null) throw new Error(`Tarea no encontrado ${id}`) 
        else return await this.verTarea(id);
    }
    async verTarea(id) {
        let resultado = await Libro.findById(id)
        if(resultado==null) throw new Error(`Tarea no encontrado ${id}`) 
        else return resultado;
    } 
}

module.exports = {Tarea,TareaApp}

