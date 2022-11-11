class Tarea extends LocalStorageModel{
    constructor(titulo, descripcion) {
        super("tarea");
        this._id = idGenerator.genId();
        this._titulo = titulo;
        this._descripcion = descripcion;
    }
    //Getters
    get id() {
        this.deserialize();
        return this._id;
    }
    get titulo() {
        this.deserialize();
        return this._titulo;
    }
    get descripcion() {
        this.deserialize();
        return this._descripcion;
    }
    //Setters
    set titulo(titulo) {
        this._titulo = titulo;
        this.serialize();
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion
        this.serialize();
    }
}

class TareaApp extends LocalStorageModel {
    tareas = []

    constructor() {
        super('tareasApp');
    }

    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea(titulo, descripcion)
        this.tareas.push(tarea);
        this.serialize();
        return tarea;
    }
    borrarTarea(_id) {
        this.tareas = this.tareas.filter(tarea => tarea._id != _id);
        this.serialize();

    }
    getTareas() {
        this.deserialize();
        return this.tareas;
    }
    modificarTarea(_id, titulo, descripcion) {
        let tarea = this.tareas.find(tarea => tarea._id == _id)
        tarea._titulo = titulo
        tarea._descripcion = descripcion
        this.serialize();
        return tarea;
    }
    verTarea(_id) {
        this.deserialize();
        let tarea = this.tareas.find(tarea => tarea._id == _id)
        //Object.assign();
        return tarea;
    }

}

