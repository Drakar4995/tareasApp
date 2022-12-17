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
    beforeEach(async function (){
        let tareaApp = new TareaAppProxy();
        await tareaApp.borrarTodo();
    });
    it('test de agregar tarea', async function () {
        //Arrange
        let tareaApp = new TareaAppProxy();
        await tareaApp.agregarTarea("titulo1", "descripcion1");
        tareas = await tareaApp.getTareas();

        //Assert
        assert.equal(tareas[0].titulo, "titulo1")
        assert.equal(tareas[0].descripcion, "descripcion1")
    })
    it('test de borrar tarea',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();
        await tareaApp.agregarTarea("titulo1", "descripcion1");
        tareas = await tareaApp.getTareas();

        tarea = await tareaApp.borrarTarea(tareas[0]._id);
        //Asert
        assert.isDefined(tarea);
    })
    it('Test de Modificar Tarea',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();
        let title_mod = "tituloMod"
        let des_mod = "descripcionMod"

        await tareaApp.agregarTarea("titulo1", "descripcion1");
        tareas = await tareaApp.getTareas();
        tarea = tareas[0];
        tareaApp.modificarTarea(tarea._id,title_mod,des_mod)
        tarea = await tareaApp.verTarea(tarea._id);

        //Assert
        assert.equal(tarea.titulo,title_mod)
        assert.equal(tarea.descripcion,des_mod)
    })
    it('Test de ver Tarea',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();

        await tareaApp.agregarTarea("titulo1", "descripcion1");

        tareas = await tareaApp.getTareas();

        tarea = tareas[0];

        tareaCheck = await tareaApp.verTarea(tarea._id);
        
        //Assert
        assert.equal(tareaCheck._descripcion,tarea._descripcion);
        assert.equal(tareaCheck._titulo,tarea._titulo);
    })
    it('Test de listar tareas',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();

        await tareaApp.agregarTarea("titulo1", "descripcion1");
        await tareaApp.agregarTarea("titulo2", "descripcion2");

        tareas = await tareaApp.getTareas();

        tarea = tareas[0];
        tarea2 = tareas[1];
        
        //Assert
        assert.equal(tarea.descripcion,"descripcion1");
        assert.equal(tarea.titulo,"titulo1");

        assert.equal(tarea2.descripcion,"descripcion2");
        assert.equal(tarea2.titulo,"titulo2");
    })
    it('Test de borrarTodo',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();

        await tareaApp.agregarTarea("titulo1", "descripcion1");
        await tareaApp.agregarTarea("titulo2", "descripcion2");

        await tareaApp.borrarTodo();

        tareas = await tareaApp.getTareas();
        
        //Assert
        assert.equal(tareas.length, 0);
    })
})