class Tarea{
    constructor(titulo, descripcion) {
        super("tarea");
        this._id = idGenerator.genId();
        this._titulo = titulo;
        this._descripcion = descripcion;
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
    constructor() {
        super('tareasApp');
    }

    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea(titulo, descripcion);
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

