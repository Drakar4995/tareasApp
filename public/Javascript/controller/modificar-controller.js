class ModificarController extends PageController {
  constructor(regex, model, view) {
    super(regex, model, view);
  }
   onModificarTarea(id) {
    window.event.preventDefault();
    let titulo = this.view.getTitulo();
    let descripcion = this.view.getDescripcion();
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    if (titulo != "" && descripcion != "") {
      this.model.modificarTarea(id,titulo, descripcion);
      router._route("/tareasapp/index.html");
      //this.view.refresh();
    } else {
      alert("Rellena todos los campos");
    }
  }
  onLimpiar() {
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
  }
}
