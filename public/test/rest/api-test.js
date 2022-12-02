var assert = require("chai").assert;
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);
const url = 'http://localhost:3000/api';


describe("Testing api funciones", function () {
    it("Agregar tarea", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({ titulo: 'Título', descripcion: 'descripcion' }) 
        .end(function (err, res) {
            if (err) done(err); else { 
                assert.equal(res.status, 200);
                assert.equal(res.body._titulo, 'Título'); 
                assert.equal(res.body._descripcion, 'descripcion'); 
                assert.isDefined(res.body._id);
                done() 
            }
        })
    });
    it("Modificar tarea", function (done) {
        chai.request(url)
        .put('/tareas/0')
        .send({ titulo: 'Títulomod', descripcion: 'descripcionmod' }) 
        .end(function (err, res) {
            if (err) done(err); else { 
                assert.equal(res.status, 200);
                assert.equal(res.body._titulo, 'Títulomod'); 
                assert.equal(res.body._descripcion, 'descripcionmod'); 
                assert.equal(res.body._id, '0'); 
                done() 
            }
        })
    });
    it("Listar tareas", function (done) {
        chai.request(url)
        .get('/tareas')
        .send({}) 
        .end(function (err, res) {
            if (err) done(err); else { 
                tareas = res.body;
                assert.equal(res.status, 200);
                assert.equal(tareas[0]._titulo, 'Títulomod');
                assert.equal(tareas[0]._descripcion, 'descripcionmod'); 
                done() 
            }
        })
    });
    it("Ver tarea específica", function (done) {
        chai.request(url)
        .get('/tareas/0')
        .send({}) 
        .end(function (err, res) {
            if (err) done(err); else { 
                assert.equal(res.status, 200);
                assert.equal(res.body._titulo, 'Títulomod'); 
                assert.equal(res.body._descripcion, 'descripcionmod'); 
                assert.equal(res.body._id, '0'); 
                done() 
            }
        })
    });
    it("Eliminar tarea específica", function (done) {
        chai.request(url)
        .delete('/tareas/0')
        .send({}) 
        .end(function (err, res) {
            if (err) done(err); else { 
                assert.equal(res.status, 200);
                done() 
            }
        })
    });
});