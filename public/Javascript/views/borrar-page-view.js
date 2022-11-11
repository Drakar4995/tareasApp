class BorrarPageView extends PageView{
    constructor(model){
        super(model);
        this.content = `<div class="div-delete-task">
        <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <div class=delete-task-separate>
        <p class="addTask">Tarea N</p>
        <p>La tarea N ha sido borrada</p>
        </div>
        `;
    }
    
    refresh(){
        this.setContent();
        super.refresh();
    }

    setContent(){
        let id = this.getId();
        model.borrarTarea(id);
        this.content = `
        <div class="div-delete-task">
        <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <div class=delete-task-separate>
        <p class="addTask">Tarea `+id+`</p>
        <p>La tarea `+id+` ha sido borrada</p>
        </div>
        `;

    }
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
}