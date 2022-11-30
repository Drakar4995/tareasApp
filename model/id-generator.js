class IdGenerator
{
    lastId= 0 ; 

    genId()
    {
        return this.lastId++;
    }
        
}

let idGenerator = new IdGenerator();