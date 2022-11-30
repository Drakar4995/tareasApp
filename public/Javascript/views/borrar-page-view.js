class BorrarPageView extends PageView{
    constructor(model){
        super(model);
        this.refresh();
    }
    
    async refresh() {
        await this.setContent();
        super.refresh();
    }

    async setContent(){
        let id = this.getId();
        if(id != null){
            let tarea = await this._model.verTarea(id);
            this._model.borrarTarea(id);
            this.content = `
            <div class="div-delete-task">
            <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
                Listado
            </a>
            <div class=delete-task-separate>
            <p class="addTask">Tarea `+tarea._titulo+`</p>
            <p>La tarea `+tarea._titulo+` ha sido borrada, con id: `+id+`</p>
            </div>
            `;
        }
    }
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
}