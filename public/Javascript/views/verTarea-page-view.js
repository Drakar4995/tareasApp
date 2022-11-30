class VerTareaPageView extends PageView{
    constructor(model){
        super(model);
        this.setContent();
    }
    
    async refresh(){
        await this.setContent();
        super.refresh();
    }

    async setContent(){
        let id = this.getId();
        if(id != null){
            let tarea = await this._model.verTarea(id);
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
    }
    
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
}