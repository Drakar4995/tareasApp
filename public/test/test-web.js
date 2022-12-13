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
        tareas = await tareaApp.getTareas();

        tareas.forEach( async function(tarea, index, array) {
            await tareaApp.borrarTarea(tarea._id);
        });
    });
    it('test de agregar tarea', async function () {
        //Arrange
        let tareaApp = new TareaAppProxy();
        let tarea = new Tarea();
        let titulo = "titulo1"
        let descripcion = "descripcion1"
        Object.assign(tarea,{titulo,descripcion, _id: this.lastId++});

        await tareaApp.agregarTarea("titulo1", "descripcion1");

        tareas = await tareaApp.getTareas();

        //Assert
        assert.equal(tareas[0]._titulo, tarea._titulo)
        assert.equal(tareas[0]._descripcion, tarea._descripcion)
    })
    it('test de borrar tarea',async function(){
        //Arrange
        let tareaApp = new TareaAppProxy();
        let tarea = new Tarea();
        let titulo = "titulo1"
        let descripcion = "descripcion1"
        Object.assign(tarea,{titulo,descripcion, _id: this.lastId++});

        await tareaApp.agregarTarea("titulo1", "descripcion1");
        tarea = await tareaApp.borrarTarea(tarea._id);
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
        assert.equal(tarea._titulo,title_mod)
        assert.equal(tarea._descripcion,des_mod)
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
        assert.equal(tarea._descripcion,"descripcion1");
        assert.equal(tarea._titulo,"titulo1");

        assert.equal(tarea2._descripcion,"descripcion2");
        assert.equal(tarea2._titulo,"titulo2");
    })
    
})