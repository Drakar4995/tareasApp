class PageView extends View {
    constructor(model){
        super(model, 'main');
        this.content = `<h1> Sin contenido </h1>`
    }
    getId(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let id = urlParams.get('id');
        return id;
    }
}