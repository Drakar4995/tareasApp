class LocalStorageModel{
    constructor(storageId){
        this._storageId=storageId;
    }

    get storageId(){
        return this._storageId;
    }

    serialize(){
        localStorage.setItem(this._storageId, JSON.stringify(this))
    }

    deserialize(){
        Object.assign(this, JSON.parse(localStorage.getItem(this.storageId)))
    }

}