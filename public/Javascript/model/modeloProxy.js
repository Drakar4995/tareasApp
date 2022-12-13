class TareaAppProxy{

    base = '/api';

    constructor() {
    }

    async agregarTarea(titulo, descripcion) {
        let response = await fetch(`${this.base}/tareas`,{
            body: JSON.stringify({ titulo,descripcion }),
            method:'POST',
            headers: {"Content-Type": "application/json"}
        });
        if(response.ok){
            let tareas = await response.json();
            return tareas;
        } else {
            console.error(err.message);
        }
    }

    async borrarTarea(_id) {
        let response = await fetch(`${this.base}/tareas/${_id}`, { method: 'DELETE' });
        if(!response.ok){
            console.error(err.message);
        } else {
            return response;
        }
    }

    async getTareas() {
        let response = await fetch(`${this.base}/tareas`);
        if(response.ok){
            let tareas = await response.json();
            return tareas;
        } else {
            console.error(err.message);
        }
    }

    async borrarTodo() {
        let response = await fetch(`${this.base}/tareas`, {
            method: 'DELETE'
        });
        if(!response.ok){
            console.error(err.message);
        } else {
            return response;
        }
    }

    async modificarTarea(_id, titulo, descripcion) {
        let t = { titulo, descripcion };
        let response = await fetch(`${this.base}/tareas/${_id}`, { method: 'PUT', body: JSON.stringify(t), headers: { "Content-Type":
        "application/json" } });
        if(!response.ok){
            console.error(err.message);
        } else {
            let tarea = await response.json();
            return tarea;
        }
    }

    async verTarea(_id) {
        let response = await fetch(`${this.base}/tareas/${_id}`);
        if(response.ok){
            let tarea = await response.json();
            return tarea;
        } else {
            console.error(err.message);
        }
    }

}



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