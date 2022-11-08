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
                            <a class="logo-link"href="agregar-tarea.html" class="links-index"><input class="boton-delete" type="button" value="Agregar Tarea" /></a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <script>
                
                </script>
                    <tr>
                        <td>
                            <a href="ver-tarea.html">Titulo Tarea 1</a>
                        </td>
                        <td>
                            <a class="logo-link" href="borrar-tarea.html">
                                <input class="boton-delete" type="button" value="Eliminar" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="ver-tarea.html"> Titulo Tarea 2</td>
                        <td>
                            <a class="logo-link" href="borrar-tarea.html">
                                <input class="boton-delete" type="button" value="Eliminar" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="ver-tarea.html"> Titulo Tarea 3</td>
                        <td>
                            <a class="logo-link" href="borrar-tarea.html">
                                <input class="boton-delete" type="button" value="Eliminar"/>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`

        
        
        //this.incrementarContadorView =  new ContadorView(model, 'contador');
    }
    
    refresh(){
        super.refresh();
        //this.incrementarContadorView.refresh();
    }
}

