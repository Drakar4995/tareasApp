let model, editarContadorPageController, editarContadorPageView, incrementarContadorPageView, incrementarContadorPageController, router

function init() {
    model = new TareaApp();
    model.agregarTarea("Titulo uno","descrision");
    model.agregarTarea("Titulo uadsasd","descradsision");
    model.agregarTarea("Titulo uasdno","descrsision");
    model.agregarTarea("Titulo uadsno","descrdasision");
    //editarContadorPageView = new EditarContadorPageView(model);
    indexPageView = new IndexPageView(model);
    //incrementarContadorPageView = new IncrementarContadorPageView(model);
    
    indexController = new IndexController(/\/tareasApp\/(index.html|listado)/ig,model,indexPageView);
    //editarContadorPageController = new EditarContadorPageController(/\/contador-pager-app\/(index.html|editar)/ig, model, editarContadorPageView);
    //incrementarContadorPageController = new IncrementarContadorPageController(/\/contador-pager-app\/(index.html|incrementar)/ig, model, incrementarContadorPageView);
    

    router = new Router();
    router.addPageController(indexController);
    //router.addPageController(incrementarContadorPageController)
    router.route();
}