Restablecer();
describe("Tarea App Proxy Test",async function () {
  
  let titulo = "Titulo Prueba";
  let descripcion = "Descripcion de Prueba";

  it("Test Agregar Tarea", async function () {
    let tareaApp = new TareaAppProxy();

    let respuesta = await tareaApp.agregarTarea(titulo, descripcion);

    assert.equal(respuesta._titulo, titulo);
    assert.equal(respuesta._descripcion, descripcion);
  });

  it("Test de Get Tareas", async function () {
    let tareaApp = new TareaAppProxy();
    await tareaApp.agregarTarea(titulo+1, descripcion+1);

    let respuesta = await tareaApp.getTareas();
  
    assert.equal(respuesta[0]._titulo,titulo);
    assert.equal(respuesta[0]._descripcion,descripcion);
    assert.equal(respuesta[1]._titulo,titulo+1);
    assert.equal(respuesta[1]._descripcion,descripcion+1);
  });

  it("Prueba de Modificar Tarea",async function(){
    let tareaApp = new TareaAppProxy();
    await tareaApp.modificarTarea(1,"TituloMod","DescMOD");
    let tarea = await tareaApp.verTarea(1);
    
    assert.equal(tarea._titulo,"TituloMod");
    assert.equal(tarea._descripcion,"DescMOD");

  })

  it("Prueba de Ver Tarea",async function(){
    let tareaApp = new TareaAppProxy();

    let tarea = await tareaApp.verTarea(0);
    assert.equal(tarea._descripcion,descripcion);  
    assert.equal(tarea._titulo,titulo);  
  })

});



async function Restablecer() {
  let tareaApp = new TareaAppProxy();
  let tareas = await tareaApp.getTareas();

  for (let i = 0; i < tareas.length; i++) {
    await tareaApp.borrarTarea(tareas[i]._id);
  }
  return tareas;
}
