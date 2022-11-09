class AgregarController extends PageController{
    constructor(regex,model,view){
        super(regex,model,view);
    }
    onGuardarTarea(event){
        let titulo = this.view.getTitulo();
        let descripcion = this.view.getTitulo();
        this.model.agregarTarea(titulo,descripcion);
        this.view.refresh();
    }
}