var express = require('express');
var router = express.Router();


const {login,admin} = require('../controllers/userController');
let ingresoMiddleware = require('../middlewares/userIngreso')


/* GET users listing. */
router.get('/', login);

router.get('/admin',ingresoMiddleware ,admin)


module.exports = router;
