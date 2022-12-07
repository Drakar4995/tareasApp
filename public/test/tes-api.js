
var assert = require("chai").assert;
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);
const url = "http://localhost:3000/api";

describe("Tareas", function(){
    it("Agregar Tarea",function(done){
        chai
        .request(url)
        .post("/tareas")
        .send({titulo:"Titulo1",descripcion:"descripcion1"})
        .end(function(err,res){
            if(err) done(err);
            else{
                assert.equal(res.status,200);
                assert.equal(res.body._titulo,"Titulo1");
                assert.equal(res.body._descripcion,"descripcion1");
                assert.isDefined(res.body._id);
                done();
            }
        })
    })

    it("Ver Todas las Tareas",function(done){
        chai
        .request(url)
        .get("/tareas")
        .end(function(err,res){
            if(err) done(err);
            else{
                assert.equal(res.status,200);
                assert.equal(res.body[0]._titulo,"Titulo1");
                assert.equal(res.body[0]._descripcion,"descripcion1");
                assert.equal(res.body[0]._id,"0");
                done();
            }
        })
    })

    it("Ver Tarea con un ID MOD",function(done){
        chai
        .request(url)
        .get("/tareas/0")
        .end(function(err,res){
            if(err) done(err);
            else{
                assert.equal(res.status,200);
                assert.equal(res.body._titulo,"Titulo1");
                assert.equal(res.body._descripcion,"descripcion1");
                assert.equal(res.body._id,"0");
                done();
            }
        })
    })
    it("Modificar una Tarea con ID",function(done){
        chai
        .request(url)
        .put("/tareas/0")
        .send({titulo:"TituloMOD",descripcion:"DesMOD"})
        .end(function(err,res){
            if(err) done(err);
            else{
                assert.equal(res.status,200);
                assert.equal(res.body._titulo,"TituloMOD");
                assert.equal(res.body._descripcion,"DesMOD");
                assert.equal(res.body._id,"0");
                done();
            }
        })
    })

    it("Modificar una Tarea con ID",function(done){
        chai
        .request(url)
        .delete("/tareas/0")
        .end(function(err,res){
            if(err) done(err);
            else{
                assert.equal(res.status,200);
                assert.equal(res.body.length,0);
                done();
            }
        })
    })

}
);