class VerTareaPageView extends PageView{
    constructor(model){
        super(model);
        this.content = `<p class="addTask">Ver Tarea ID:</p>
        <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <a class="ver-tarea-buttons" href="modificar-tarea.html">
            Modificar
        </a>
        <div class="div-see-task">
            <p class="titleform">Titulo</p>
            <p></p>
            <p class="titleform">Descripcion</p>
            <p></p>
        </div>`;
    }
    
    refresh(){
        this.setContent();
        super.refresh();
    }

    setContent(){
        let id = this.getId();
        let tarea = model.verTarea(id);
        this.content = `<p class="addTask">Ver Tarea ID:`+id+`</p>
        <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <a class="ver-tarea-buttons" href="/tareasApp/modificartarea/?id=`+id+`" onclick="router.route()">
            Modificar
        </a>
        <div class="div-see-task">
            <p class="titleform">Titulo</p>
            <p>`+tarea._titulo+`</p>
            <p class="titleform">Descripcion</p>
            <p>`+tarea._descripcion+`</p>
        </div>`;
    }
    
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
}