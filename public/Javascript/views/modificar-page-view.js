class ModificarPageView extends PageView {
  constructor(model) {
    super(model);
    this.content = `<h1>ERROR </h1>`;
  }

  async setContent() {
    let id = this.getId();
    let tarea = await this._model.verTarea(id);
    this.content =
      ` <p class="addTask">
        Modificar Tarea `+id+`
    </p>
    <div class="div-see-task">
    <a class="ver-tarea-buttons" href="/tareasApp/listado" onclick="router.route()">
            Listado
        </a>
        <div class="div-modify">
        <form>
        <label class="titleform" for="titulo">Titulo</label> <br>
        <input id="titulo" class="text" type="text" value="` +
      tarea.titulo +
      `"> <br>

        <label class="titleform" for="descripcion">Descripcion</label> <br>
        <textarea id="descripcion" class="textarea">` +
      tarea.descripcion +
      `</textarea>
    </form>
    <input class="boton-delete" type="button" onclick='modificarController.onModificarTarea("`+tarea._id+`")' value="Guardar" />
        <button class=boton-delete type="button" onclick="modificarController.onLimpiar()"> Limpiar </button>
        <div>
        </div>`;
  }
  async refresh() {
    await this.setContent();
    super.refresh();
}
  getTitulo() {
    return document.getElementById("titulo").value;
  }

  getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    return id;
  }

  getDescripcion() {
    return document.getElementById("descripcion").value;
  }
}
