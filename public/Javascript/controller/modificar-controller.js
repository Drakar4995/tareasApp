class ModificarController extends PageController {
  constructor(regex, model, view) {
    super(regex, model, view);
  }
  onModificarTarea(event, id) {
    let titulo = this.view.getTitulo();
    let descripcion = this.view.getDescripcion();
    titulo = titulo.trim();
    descripcion = descripcion.trim();
    if (titulo != "" && descripcion != "") {
      this.model.modificarTarea(id,titulo, descripcion);
      this.view.refresh();
      alert("Los datos se han guardado correctamente");
    } else {
      alert("Rellena todos los campos");
    }
  }
  onLimpiar() {
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
  }
}
