const assert = require("chai").assert;
const Tarea = require("../../model/modelo").Tarea;
const TareaApp  = require("../../model/modelo").TareaApp;

describe('test de tarea', function () {
    let titulo = "titulo1"
    let descripcion = "descripcion1"
    it('test del constructor', function () {
        let expected = new Tarea();
        Object.assign(expected,{titulo,descripcion, _id: this.lastId++});
        assert.equal(expected.titulo, titulo)
        assert.equal(expected.descripcion, descripcion)
    })
})

describe("tarea app ", function () {
    it('test de agregar tarea', function () {
        let tareaApp = new TareaApp()
        let tarea = new Tarea();
        let titulo = "titulo1"
        let descripcion = "descripcion1"
        Object.assign(tarea,{titulo,descripcion, _id: this.lastId++});

        tareaApp.agregarTarea("titulo1", "descripcion1");

        assert.equal(tareaApp.tareas[0]._titulo, tarea._titulo)
        assert.equal(tareaApp.tareas[0]._descripcion, tarea._descripcion)
    })
    it('test de borrar tarea',function(){

        let tareaApp = new TareaApp()
        let tarea = new Tarea("titulo", "descripcion")
        tareaApp.tareas.push(tarea)

        tareaApp.borrarTarea(tarea._id)
        assert.equal(tareaApp.tareas.length,0)
    })
    it('Test de Modificar Tarea',function(){
        //Arrange
        let tareaApp = new TareaApp()
        let tarea = new Tarea("titulo", "descripcion")
        let des_mod = "tituloMod"
        let title_mod = "descripcionMod"

        //Act
        tareaApp.tareas.push(tarea)
        tareaApp.modificarTarea(tarea._id,title_mod,des_mod)

        //Assert
        assert.equal(tareaApp.tareas[0].titulo,title_mod)
        assert.equal(tareaApp.tareas[0].descripcion,des_mod)
    })
    it('Test de verTarea',function(){
        //Arrange
        let tareaApp = new TareaApp()
        let tarea = new Tarea("titulo", "descripcion")
        //Act
        tareaApp.tareas.push(tarea)
        let expected = tareaApp.verTarea(tarea._id)
        //Assert
        assert.equal(expected,tarea)
    })
    it('Test de listar tareas',function(){
        //Arrange
        let tareaApp = new TareaApp();

        tareaApp.agregarTarea("titulo1", "descripcion1");
        tareaApp.agregarTarea("titulo2", "descripcion2");

        tareas = tareaApp.getTareas();

        tarea = tareas[0];
        tarea2 = tareas[1];
        
        //Assert
        assert.equal(tarea._descripcion,"descripcion1");
        assert.equal(tarea._titulo,"titulo1");

        assert.equal(tarea2._descripcion,"descripcion2");
        assert.equal(tarea2._titulo,"titulo2");
    })
})