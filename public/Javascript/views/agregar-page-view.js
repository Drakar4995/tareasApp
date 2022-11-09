class AgregarPageView extends PageView{
    constructor(model){
        super(model);
        this.content= `<p class="addTask">
        Agregar Tarea
       </p>
       
       <div class="div-delete-task">
        <a class="top-spacer-form" href="/tareasApp/listado" onclick="router.route('')">Listado</a>
       
        <form class="form-add">
            <label class="titleform" for="titulo">Titulo</label> <br>
            <input class="text" id="titulo" type="text"> <br>
       
            <label class="titleform" for="descripcion">Descripcion</label> <br>
            <textarea class="textarea" id="descripcion"> </textarea>
        </form>
            <input class="boton-delete" type="button" onclick="agregarController.onGuardarTarea()" value="Guardar" />
        <button class=boton-delete type="button" onclick=""> Limpiar </button>
       </div>`;
    }

    refresh(){
        super.refresh();
    }

    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }

}



