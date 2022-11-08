class AgregarPageView extends PageView{
    constructor(model){
        super(model);
        this.content= `<p class="addTask">
        Agregar Tarea
       </p>
       
       <div class="div-delete-task">
        <a class="top-spacer-form" href="/tareasApp/listado" onclick="router.route('')">Listado</a>
       
        <form>
            <label class="titleformone" for="titulo">Titulo</label> <br>
            <input class="text" type="text"> <br>
       
            <label class="titleform" for="descripcion">Descripcion</label> <br>
            <textarea class="textarea" id="descripcion"> </textarea>
        </form>
        <button type="button" onclick="agregarController.agregarTareaController.onGuardarClick(event)">Agregar</button>
        </a>
        <button class=boton-delete type="button"> Limpiar </button>
       </div>`;
       this.agregarTareaView = new AgregarTareaView(model,"agregarTarea");
    }
    refresh(){
        super.refresh();
        this.agregarTareaView.refresh();
    }

}



