
class AgregarTareaView extends View{
    constructor(model,parentId){
        super(model,parentId);
    }
    getTitulo(){
        return document.getElementById("titulo").value;
    }
    getDescripcion(){
        return document.getElementById("descripcion").value;
    }

    refresh(){
        // router.route("/tareasApp/listado");
        super.refresh();
    }
}