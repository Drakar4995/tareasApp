class IndexPageView extends PageView{
    constructor(model){
        super(model);
        let tareas = model.getTareas();
        this.content= `<p class="title-list">Listado de Tareas</p>
        <div class="div-index">
            <table class="table-index">
                <thead>
                    <tr>
                        <th>
                            Tareas
                        </th>
                        <th>
                            <a class="logo-link" href="/tareasApp/agregar" onclick="router.route()" class="links-index">Agregar tarea</a>
                        </th>
                    </tr>
                </thead>
                <tbody>`;

           for(let i=0 ; i < tareas.length ; i++){
            this.content += `<tr> <td> <a href="controlador/ ?id=`+ tareas[i]._id+`" >` + tareas[i]._titulo +`</td> 
            <td>
                            <a class="logo-link" href="borrar-tarea.html">
                                <input class="boton-delete" type="button" value="Eliminar" />
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