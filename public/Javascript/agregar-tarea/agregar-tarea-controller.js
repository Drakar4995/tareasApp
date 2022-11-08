class AgregarTareaController extends Controller {
  constructor(model, view) {
    super(model, view);
  }

  onGuardarClick() {
    let titulo = this.view.getTitulo();
    let descripcion = this.view.getDescripcion();
    if (titulo != "" && descripcion != "") {
      this.model.agregarTarea(titulo, descripcion);

      alert("Los datos se han guardado correctamente");
      //this.view.refresh();
    }else
    {
        alert('Debes rellenar todos los campos');
    }
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
  }
}
