class ModificarPageView extends PageView {
  constructor(model) {
    super(model);
    this.content = `<h1>ERROR </h1>`;
  }

  setContent() {
    let id = this.getId();
    let tarea = model.verTarea(id);
    this.content =
      ` <p class="addTask">
        Modificar Tarea N
    </p>
    <div class="div-see-task">
    <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <div class="div-modify">
        <form>
        <label class="titleform" for="titulo">Titulo</label> <br>
        <input id="titulo" class="text" type="text" value="` +
      tarea._titulo +
      `"> <br>

        <label class="titleform" for="descripcion">Descripcion</label> <br>
        <textarea id="descripcion" class="textarea">` +
      tarea._descripcion +
      `</textarea>
    </form>
    <input class="boton-delete" type="button" onclick="modificarController.onModificarTarea(event,` +
      id +
      `)" value="Guardar" />
        <button class=boton-delete type="button" onclick="modificarController.onLimpiar()"> Limpiar </button>
        <div>
        </div>`;
  }
  refresh() {
    this.setContent();
    super.refresh();
  }
  getTitulo() {
    return document.getElementById("titulo").value;
  }

  getDescripcion() {
    return document.getElementById("descripcion").value;
  }
}
