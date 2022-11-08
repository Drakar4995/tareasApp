class AgregarController extends PageController{
    constructor(regex,mode,view){
        super(regex,mode,view);
        this.agregarTareaController = new AgregarTareaController(model,view.agregarTareaView);
    }

}