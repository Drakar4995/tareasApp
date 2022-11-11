class IndexPageView extends PageView{
    constructor(model){
        super(model);
        let tareas = model.getTareas();
        this.setContent();
        //this.incrementarContadorView =  new ContadorView(model, 'contador');
    }
    
    refresh(){
        this.setContent()
        super.refresh();
        //this.incrementarContadorView.refresh();
    }

    setContent(){
        let tareas = this.model.getTareas();
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
            this.content += `<tr> <td> <a href="/tareasApp/vertarea/?id=`+ tareas[i]._id+`" onclick="router.route()">` + tareas[i]._titulo +`</td> 
            <td>
                            <a class="top-spacer" href="/tareasApp/borrartarea/?id=`+ tareas[i]._id+`" onclick="router.route()">
                                Eliminar
                            </a>
                        </td>
            </tr>`;

           }
    }
}