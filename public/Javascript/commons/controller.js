class Controller {
    constructor(model,view){
        this._model=model;
        this._view= view
    }

    get model(){
        return this._model
    }
    get view(){
        return this._view
    }
}