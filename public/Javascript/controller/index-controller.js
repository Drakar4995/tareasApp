class IndexController extends PageController{
    constructor(regex,model,view){
        super(regex,model,view);
    }

    onclickEliminar(event, id){
        model.borrarTarea(id);
        this.view.refresh();
    }
}