class Tarea{
    constructor() {
    }
    //Getters
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get descripcion() {
        return this._descripcion;
    }
    //Setters
    set titulo(titulo) {
        this._titulo = titulo;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion
    }
}

class TareaApp{
    tareas = []
    lastId = 0;
    constructor() {
    }

    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea();
        Object.assign(tarea,{titulo,descripcion, _id: this.lastId++});
        this.tareas.push(tarea);
        return tarea;
    }
    borrarTarea(_id) {
        this.tareas = this.tareas.filter(tarea => tarea._id != _id);
    }

    getTareas() {
        return this.tareas;
    }
    modificarTarea(_id, titulo, descripcion) {
        let index = this.tareas.findIndex((t)=>t._id==_id);
        let tarea = this.tareas[index];
        tarea.titulo=titulo;
        tarea.descripcion=descripcion;
        return tarea;
    }
    verTarea(_id) {
        let tarea = this.tareas.find(tarea => tarea._id == _id)
        if(!tarea)throw new Error(`La tarea con ID ${_id} no existe`);
        return tarea;
    }

}

module.exports = {Tarea,TareaApp};

