var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res)=> {
  console.log('dentro');
  res.redirect('./tareasApp/index.html');
});

router.get('/tareasApp/listado', (req, res)=> {
  console.log('dentro');
  res.redirect('./index.html');
});

module.exports = router;
