class Router {
    constructor(){
        this._pageControllers = [];
        this.init();
    }

    init(){
        window.onpopstate = function(){
            router.routeControllers(document.location.pathname);
        }
    }

    addPageController(pageController){
        this._pageControllers.push(pageController);
    }
    
    route(url){
        window.event.preventDefault();
        url= url? url: (window.event.target.href ? window.event.target.href: document.location.pathname);
        window.history.pushState(window.history.state, '', url);
        this.routeControllers(url);
    }

    routeControllers(url){
    let i= 0;
    let result;
    while(i< this._pageControllers.length){
        if(result=this._pageControllers[i].router(url)){
            i=this._pageControllers.length
        }else{
            i++
        }
    }
    }
}