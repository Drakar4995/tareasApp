var mongoose = require("mongoose");
var assert = require("chai").assert;
var modelclass = require('../../model/modelo').TareaApp;
var model = new modelclass();


describe("Libreria", function () {
  beforeEach(async function () {
    await model.borrarTodo();
  });
  it("Tareas Agregar Tarea", async function () {
    var tareas;
    let tarea = await model.agregarTarea("Titulo", "Descripcion");
    tareas = await model.getTareas();
    assert.equal(tareas.length, 1);
    assert.equal(tarea.titulo, "Titulo");
    assert.equal(tarea.descripcion, "Descripcion");
    assert.isDefined(tarea._id);
  });

  it("Tareas ver tareas", async function () {
    var tareas = await model.getTareas();
    assert.equal(tareas.length, 0);
    await model.agregarTarea("Titulo", "Descripcion");
    tareas = await model.getTareas();
    assert.equal(tareas.length, 1);
    await model.agregarTarea("Titulo", "Descripcion");
    tareas = await model.getTareas();
    assert.equal(tareas.length, 2);
  });
  it("Tareas ver tarea", async function () {
    var tarea = await model.agregarTarea("Titulo", "Descripcion");
    tarea = await model.verTarea(tarea._id.toString());
    assert.equal(tarea.titulo, "Titulo");
    assert.equal(tarea.descripcion, "Descripcion");
    assert.isDefined(tarea._id);
  });
  it("Tareas Modificar tarea", async function () {
    var tarea = await model.agregarTarea("Titulo", "Descripcion");
    tarea = await model.verTarea(tarea._id.toString());
    assert.equal(tarea.titulo, "Titulo");
    assert.equal(tarea.descripcion, "Descripcion");
    assert.isDefined(tarea._id);
    let id = tarea._id.toString();
    await model.modificarTarea(tarea._id.toString(), "TituloX", "DescripcionX");
    tarea = await model.verTarea(tarea._id.toString());
    assert.equal(tarea.titulo, "TituloX");
    assert.equal(tarea.descripcion, "DescripcionX");
    assert.equal(tarea.id.toString(), id);
  });
  it("Tareas Borrar tarea", async function () {
    await model.agregarTarea("Titulo", "Descripcion");
    let tareas = await model.getTareas();
    assert.equal(tareas.length, 1);
    await model.borrarTarea(tareas[0]._id);
    let tareas2 = await model.getTareas();
    assert.equal(tareas2.length, 0);
  });
  it("Tareas Borrar todas las tareas", async function () {
    await model.agregarTarea("Titulo", "Descripcion");
    await model.agregarTarea("Titulo", "Descripcion");
    await model.agregarTarea("Titulo", "Descripcion");
    let tareas = await model.getTareas();
    assert.equal(tareas.length, 3);
    await model.borrarTodo();
    let tareas2 = await model.getTareas();
    assert.equal(tareas2.length, 0);
  });

  after(async function () {
   return mongoose.disconnect();
  });
});