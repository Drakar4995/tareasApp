var express = require('express');
var router = express.Router();
var modelclass = require('../model/modelo.js').TareaApp;
var model = new modelclass();

/* GET tareas listing. */
router.get('/tareas', async function(req, res, next) {
  tareasget = await model.getTareas();
  let respuesta = res.json(tareasget);
  return respuesta;
});

router.get('/tareas/:id', async function (req, res, next) {
    try {
        let tarea = await model.verTarea(req.params.id);
        return res.json(tarea);
    } catch (e) {
        res.status(500).send(err.message);
        console.error(err);
    }
});

router.post('/tareas', async function(req, res, next) {
    let tarea = req.body;
    tarea = await model.agregarTarea(tarea.titulo,tarea.descripcion);
    res.json(tarea);
});

router.delete('/tareas/:id', async function(req, res, next) {
    let id = req.params.id;
    try{
    await model.borrarTarea(id);
    res.json();
    } catch(err){
        res.status(500).send(err.message);
        console.error(err);
    }
});

router.delete('/tareas/', async function(req, res, next) {
    let id = req.params.id;
    try{
    await model.borrarTodo();
    res.json();
    } catch(err){
        res.status(500).send(err.message);
        console.error(err);
    }
});

router.put('/tareas/:id', async function (req, res, next) {
    try {
    let tarea = await model.modificarTarea(req.params.id, req.body.titulo,
    req.body.descripcion);
    return res.status(200).send(tarea);
    } catch (e) {
    res.statusMessage = e.message;
    return res.status(404).send();
    }
    });
  

module.exports = router;
