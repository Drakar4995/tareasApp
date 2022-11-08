class AgregarPageView extends PageView{
    constructor(model){
        super(model);
        this.content= `<p class="addTask">
        Agregar Tarea
       </p>
       
       <div class="div-delete-task">
        <a class="top-spacer" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
       
        <form>
            <label class="titleform" for="titulo">Titulo</label> <br>
            <input class="text" id="titulo" type="text"> <br>
       
            <label class="titleform" for="descripcion">Descripcion</label> <br>
            <textarea class="textarea"> </textarea>
        </form>
        <a class="logo-link" href="ver-tarea.html">
            <input class="boton-delete" type="button" value="Guardar" />
        </a>
        <button class=boton-delete type="button"> Limpiar </button>
       </div>`;
    }

    refresh(){
        super.refresh();
    }

}



