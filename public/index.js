let model, editarContadorPageController, editarContadorPageView, incrementarContadorPageView, incrementarContadorPageController, router

function init() {
    model = new TareaApp();
    model.agregarTarea("Titulo uno","descrision");
    // model.agregarTarea("Titulo uadsasd","descradsision");
    // model.agregarTarea("Titulo uasdno","descrsision");
    // model.agregarTarea("Titulo uadsno","descrdasision");
    //editarContadorPageView = new EditarContadorPageView(model);
    indexPageView = new IndexPageView(model);
    agregarPageView = new AgregarPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    borrarPageView = new BorrarPageView(model);
    modificarPageView = new ModificarPageView(model);
    //incrementarContadorPageView = new IncrementarContadorPageView(model);
    
    indexController = new IndexController(/\/tareasApp\/(index.html|listado)/ig,model,indexPageView);
    agregarController = new AgregarController(/\/tareasApp\/(agregar)/ig,model,agregarPageView);
    verTareaController = new VerTareaController(/\/tareasApp\/(vertarea)/ig,model,verTareaPageView);
    borrarController = new BorrarController(/\/tareasApp\/(borrartarea)/ig,model,borrarPageView);
    modificarController = new ModificarController(/\/tareasApp\/(modificartarea)/ig,model,modificarPageView);
    //editarContadorPageController = new EditarContadorPageController(/\/contador-pager-app\/(index.html|editar)/ig, model, editarContadorPageView);
    //incrementarContadorPageController = new IncrementarContadorPageController(/\/contador-pager-app\/(index.html|incrementar)/ig, model, incrementarContadorPageView);
    

    router = new Router();
    router.addPageController(indexController);
    router.addPageController(agregarController);
    router.addPageController(verTareaController);
    router.addPageController(borrarController);
    router.addPageController(modificarController);
    //router.addPageController(incrementarContadorPageController)
    router.route();
}