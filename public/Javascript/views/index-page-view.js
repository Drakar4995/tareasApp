class IndexPageView extends PageView{
    constructor(model){
        super(model);
        this.refresh();
        //this.incrementarContadorView =  new ContadorView(model, 'contador');
    }
    
    async refresh() {
        await this.setContent();
        super.refresh();
    }

    async setContent(){
        let tareas = await this._model.getTareas();
        this.content= `<p class="addTask">Listado de Tareas</p>
        <div class="div-index">
            <table class="table-index">
                <thead style="margin: 20px">
                    <tr>
                        <th>
                            Tareas
                        </th>
                        <th>
                            <a class="top-spacer" href="/tareasApp/agregar" onclick="router.route()">Agregar tarea</a>
                        </th>
                    </tr>
                </thead>
                <tbody>`;

           for(let i=0 ; i < tareas.length ; i++){
            this.content += `<tr> <td> <a href="/tareasApp/vertarea/?id=`+ tareas[i]._id+`" onclick="router.route()">` + tareas[i].titulo +`</td> 
            <td>
                            <a class="top-spacer" href="/tareasApp/borrartarea/?id=`+ tareas[i]._id+`" onclick="router.route()">
                                Eliminar
                            </a>
                        </td>
            </tr>`;

           }
    }
}