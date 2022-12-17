var assert = require("chai").assert;
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe("Testing api funciones", function () {
    beforeEach(function (done) {
        chai
          .request(url)
          .delete("/tareas")
          .end(function (err, res) {
            if (err) done(err);
            else {
                assert.equal(res.status, 200);
                done()
            }
          });
      });
    it("Agregar tarea", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'Título', descripcion: 'descripcion'}) 
        .end(function (err, res) {
            if (err) done(err); else { 
                assert.equal(res.status, 200);
                assert.equal(res.body.titulo, 'Título'); 
                assert.equal(res.body.descripcion, 'descripcion'); 
                assert.isDefined(res.body._id);
                done() 
            }
        })
    });
    it("Modificar tarea", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'Título', descripcion: 'descripcion'}) 
        .end(function (err, res) {
            if (err) done(err); else { 
            chai
          .request(url)
          .get("/tareas")
          .end(function (err, res) {
            if (err) done(err);
            else {
              tareas = res.body;
              tarea = tareas[0];
              chai.request(url)
                .put('/tareas/'+tarea._id)
                .send({ titulo: 'Títulomod', descripcion: 'descripcionmod' }) 
                .end(function (err, res) {
                    if (err) done(err); else { 
                        assert.equal(res.status, 200);
                        assert.equal(res.body.titulo, 'Títulomod'); 
                        assert.equal(res.body.descripcion, 'descripcionmod'); 
                        assert.equal(res.body._id, tarea._id); 
                        done() 
                    }
                });
            }
            });
            }
        });
    });

    it("Listar tareas", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'TítuloLista', descripcion: 'descripcionLista'}) 
        .end(function (err, res) {
            if (err) done(err); else { 
            chai
          .request(url)
          .get("/tareas")
          .end(function (err, res) {
            if (err) done(err);
            else {
                tareas = res.body;
                tarea = tareas[0];
                assert.equal(res.status, 200);
                assert.equal(tarea.titulo, 'TítuloLista'); 
                assert.equal(tarea.descripcion, 'descripcionLista'); 
                done()
            }
            });
            }
        });
    });

    it("Ver tarea específica", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'TítuloEspecifica', descripcion: 'descripcionEspecifica'}) 
        .end(function (err, res) {
            if (err) done(err); else { 
            chai
          .request(url)
          .get("/tareas")
          .end(function (err, res) {
            if (err) done(err);
            else {
                tareas = res.body;
                tarea = tareas[0];
                chai.request(url)
                .get('/tareas/'+tarea._id)
                .send({}) 
                .end(function (err, res) {
                    if (err) done(err); else { 
                        assert.equal(res.status, 200);
                        assert.equal(res.body.titulo, 'TítuloEspecifica'); 
                        assert.equal(res.body.descripcion, 'descripcionEspecifica'); 
                        assert.equal(res.body._id, tarea._id); 
                        done() 
                    }
                })
                
            }
            });
            }
        });
    });
    it("Eliminar tarea específica", function (done) {
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'TítuloEspecifica', descripcion: 'descripcionEspecifica'}) 
        .end(function (err, res) {
            if (err) done(err); else { 
            chai
          .request(url)
          .get("/tareas")
          .end(function (err, res) {
            if (err) done(err);
            else {
                tareas = res.body;
                tarea = tareas[0];
                chai.request(url)
                .delete('/tareas/'+tarea._id)
                .send({}) 
                .end(function (err, res) {
                    if (err) done(err); else { 
                        assert.equal(res.status, 200);
                        done() 
                    }
                })
                
            }
            });
            }
        });
    });

    it("Borrar todas las tareas", function (done) {
        chai.request(url)
        .delete('/tareas')
        .send({}) 
        .end(function (err, res) {
            if (err) done(err); else { 
                chai
                .request(url)
                .get("/tareas")
                .end(function (err, res) {
                    if (err) done(err);
                    else {
                        tareas = res.body;
                        assert.equal(res.status, 200);
                        assert.equal(tareas.length, 0); 
                        done()
                    }
                    });

            }
        });
    });

});