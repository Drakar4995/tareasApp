

// class Tarea{
//     constructor(titulo, descripcion) {
//         super("tarea");
//         this._id = idGenerator.genId();
//         this._titulo = titulo;
//         this._descripcion = descripcion;
//     }
//     //Getters
//     get id() {
//         this.deserialize();
//         return this._id;
//     }
//     get titulo() {
//         this.deserialize();
//         return this._titulo;
//     }
//     get descripcion() {
//         this.deserialize();
//         return this._descripcion;
//     }
//     //Setters
//     set titulo(titulo) {
//         this._titulo = titulo;
//         this.serialize();
//     }
//     set descripcion(descripcion) {
//         this._descripcion = descripcion
//         this.serialize();
//     }
// }

class TareaAppProxy{
    BASE = "/api";
    constructor() {
    }

    async agregarTarea(titulo, descripcion) {
        let respuesta = await fetch(`${this.BASE}/tareas`,{
            body : JSON.stringify({titulo,descripcion}),
            method:"POST",
            headers: {"Content-type": "application/json"}
        });
    
        if(respuesta.ok){
            let tareas = await respuesta.json();
            return tareas;
        
        }else{
            console.error(err.message);
        }
        
    }
    async borrarTarea(_id) {
      
        return await fetch(`${this.BASE}/tareas/${_id}`,{method:"DELETE"});

    }
    async getTareas() {
        let respuesta = await fetch(`${this.BASE}/tareas`);
        if(respuesta.ok){
            let tareas = respuesta.json();
            return tareas;
        }else{
            console.error(err.message);
        }
    }
    async modificarTarea(_id, titulo, descripcion) {
        let respuesta = await fetch(`${this.BASE}/tareas/${_id}`,{
            method:"PUT",
            body: JSON.stringify({titulo,descripcion}),
            headers: {"Content-type": "application/json"}
        });
        if(respuesta.ok){
            let tareas = respuesta.json();
            return tareas;
        }else{
            console.error(err.message);
        }
    }
    async verTarea(_id) {
        let respuesta = await fetch(`${this.BASE}/tareas/${_id}`);
        if(respuesta.ok){
            let tareas = await respuesta.json();
            return tareas;
        }else{
            console.error(err.message);
        }
    }

}

