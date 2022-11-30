class AgregarController extends PageController {
  constructor(regex, model, view) {
    super(regex, model, view);
  }
  onGuardarTarea(event) {
    let titulo = this.view.getTitulo();
    let descripcion = this.view.getDescripcion();
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    if (titulo != "" && descripcion != "") {
      let addedTask = this.model.agregarTarea(titulo, descripcion);
      alert('Los datos se han guardado correctamente')
      router.route("/tareasapp/index.html");
      this.view.refresh();
    }else{
        alert('Rellena todos los campos');
    }
    
  }
  onLimpiar() {
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
  }
}
