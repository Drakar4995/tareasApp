describe('test de tarea', function () {
    let titulo = "titulo1"
    let descripcion = "descripcion1"
    it('test del constructor', function () {
        expected = new Tarea(titulo, descripcion)
        assert.equal(expected.titulo, titulo)
        assert.equal(expected.descripcion, descripcion)
    })
})

describe("tarea app ", function () {
    it('test de agregar tarea', function () {
        let tareaApp = new TareaApp()
        let tarea = new Tarea("titulo", "descripcion")

        tareaApp.agregarTarea("titulo", "descripcion");

        assert.equal(tareaApp.tareas[0].titulo, tarea.titulo)
        assert.equal(tareaApp.tareas[0].descripcion, tarea.descripcion)
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
        let tareaApp = new TareaApp();
        //Act
        let tarea = tareaApp.agregarTarea("titulo","descripcion")
        let expected = tareaApp.verTarea(tarea.id);
        //Assert
        assert.equal(expected._id,tarea.id);
        assert.equal(expected._titulo,tarea.titulo);
        assert.equal(expected._descripcion,tarea.descripcion);
    })

    
   
})