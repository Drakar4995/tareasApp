class IndexPageView extends PageView{
    constructor(model){
        super(model);
        let tareas = model.getTareas();
        this.content= `<p class="title-list">Listado de Tareas</p>
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
            this.content += `<tr> <td> <a href="controlador/ ?id=`+ tareas[i]._id+`" >` + tareas[i]._titulo +`</td> 
            <td>
                            <a class="top-spacer" href="borrar-tarea.html">
                                Eliminar
                            </a>
                        </td>
            </tr>`;

           }
        //this.incrementarContadorView =  new ContadorView(model, 'contador');
    }
    
    refresh(){
        super.refresh();
        //this.incrementarContadorView.refresh();
    }
}