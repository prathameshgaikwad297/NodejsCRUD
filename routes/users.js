var express = require('express');
var router = express.Router();
const userControllers = require('../Controllers/users_controllers');


/* GET users listing. */
router.get('/', userControllers.getAllUsers);


/* Create users . */
router.post('/create', userControllers.createUsers);


/* Update users data. */
router.post('/update/:id', userControllers.updateUsers);


/* Delete users . */
router.post('/delete/:id', userControllers.deleteUsers);


/* Find users data. */
router.post('/find/:id', userControllers.findUsers);



module.exports = router;
