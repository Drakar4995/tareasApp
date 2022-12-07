var assert = require("chai").assert;
let Tarea = require("../../model/modelo").Tarea;
let TareaApp = require("../../model/modelo").TareaApp;

describe("Test de Tarea", function () {
  it("Constructor", function () {
    let tarea = new Tarea();
    let titulo = "Titulo1";
    let descripcion = "Descripcion1";
    Object.assign(tarea, { titulo, descripcion, _id: 0 });

    assert.equal(tarea._titulo, titulo);
    assert.equal(tarea.descripcion, descripcion);
    assert.equal(tarea._id, 0);
  });
});

describe("Test de TareasApp", function () {
  let titulo = "Titulo2";
  let descripcion = "Descripcion2";
  it("Prueba de Agregar Tarea", function () {
    let tareaApp = new TareaApp();
    tareaApp.agregarTarea(titulo, descripcion);

    assert.equal(tareaApp.tareas[0].titulo, titulo);
    assert.equal(tareaApp.tareas[0].descripcion, descripcion);
    assert.equal(tareaApp.tareas[0]._id, 0);
  });
  it("Prueba de Borrar Tarea", function () {
    let tareaApp = new TareaApp();
    tareaApp.agregarTarea(titulo, descripcion);
    //console.log(tareaApp.tareas[0]);

    assert.equal(tareaApp.tareas.length, 1);

    tareaApp.borrarTarea(0);
    //console.log("Tarea 0 a sido borrada");
    assert.equal(tareaApp.tareas.length, 0);
  });
  it("Prueba de Get Tareas", function () {
    let tareaApp = new TareaApp();
    for (let i = 0; i < 3; i++) {
      tareaApp.agregarTarea(titulo + i, descripcion + i);
      //console.log(tareaApp.tareas[i]);
      assert.equal(tareaApp.tareas[i]._id, i);
      assert.equal(tareaApp.tareas[i].titulo, titulo + i);
      assert.equal(tareaApp.tareas[i].descripcion, descripcion + i);
    }

    assert.equal(tareaApp.tareas.length, tareaApp.getTareas().length);
  });
  it("Prueba de Modificar Tarea", function () {
    let tareaApp = new TareaApp();
    let tituloMod = "TituloMod";
    let descripMod = "DescripcionMod";
    tareaApp.agregarTarea(titulo, descripcion);

    tareaApp.modificarTarea(0, tituloMod, descripMod);

    assert.equal(tareaApp.tareas[0]._id, 0);
    assert.equal(tareaApp.tareas[0].titulo,tituloMod);
    assert.equal(tareaApp.tareas[0].descripcion, descripMod);
  });

  it("Prueba de Ver Tarea",function(){
    let tareaApp = new TareaApp();
    tareaApp.agregarTarea(titulo,descripcion);

    assert.equal(tareaApp.tareas[0]._id, tareaApp.verTarea(0)._id);
    assert.equal(tareaApp.tareas[0].titulo,tareaApp.verTarea(0).titulo);
    assert.equal(tareaApp.tareas[0].descripcion, tareaApp.verTarea(0).descripcion);
  })
});
