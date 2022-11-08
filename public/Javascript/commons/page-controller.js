class PageController extends Controller{
    constructor(regex, model, view){
        super(model,view);
        this._regex=regex;
    }

    get regex(){ return this._regex;}
    router(url){
        let result;
        if (result= !!url.match(this.regex)){
            this.view.refresh();
            return result;
        }
    }
}