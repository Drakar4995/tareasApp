var express = require('express');
var router = express.Router();
var model = require('../model/modelo.js');

/* GET tareas listing. */
router.get('/tareas', function(req, res, next) {
  return res.json(model.getTareas());
});

router.get('/tareas/:id', function (req, res, next) {
    try {
        let tarea = model.verTarea(req.params.id);
        return res.json(tarea);
    } catch (e) {
        res.statusMessage = e.message;
        return res.status(404).send();
    }
});

router.post('/tareas', function(req, res, next) {
    let tarea = req.body;
    tarea = model.agregarTarea(tarea.titulo,tarea.descripcion);
    res.json(tarea);
});

router.delete('/tareas/:id', function(req, res, next) {
    let id = req.params.id;
    try{
    model.borrarTarea(id);
    res.json();
    } catch(err){
        res.status(500).send(err.message);
        console.error(err);
    }
});

router.put('/tareas/:id', function (req, res, next) {
    try {
    let tarea = model.modificarTarea(req.params.id, req.body.titulo,
    req.body.autores);
    return res.status(200).send(tarea);
    } catch (e) {
    res.statusMessage = e.message;
    return res.status(404).send();
    }
    });
  

module.exports = router;
