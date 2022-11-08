class Tarea {
    constructor(titulo, descripcion) {

        this._id = idGenerator.genId();
        this._titulo = titulo;
        this._descripcion = descripcion;
    }
    //Getters
    get titulo() { return this._titulo; }
    get descripcion() { return this._descripcion }
    //Setters
    set titulo(titulo) { this._titulo = titulo; }
    set descripcion(descripcion) { this._descripcion = descripcion }
}

class TareaApp {
    tareas = [] 
    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea(titulo,descripcion)
        this.tareas.push(tarea);
        return tarea;
    }
    borrarTarea(_id)
    {
        this.tareas=this.tareas.filter(tarea => tarea._id != _id)
        
    }
    getTareas(){
        return this.tareas;
    }
    modificarTarea(_id,titulo,descripcion)
    {
        let tarea = this.tareas.find(tarea => tarea._id == _id)
        tarea._titulo = titulo
        tarea._descripcion = descripcion

        return tarea
    }
    verTarea(_id)
    {
        let tarea = this.tareas.find(tarea => tarea._id == _id)
       
        return tarea
    }

}

