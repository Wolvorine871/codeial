const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const { route } = require('./users');


console.log('router loaded');

router.get('/',homeController.home);
router.use('/users',require('./users'));
// router.use('/users',require('./posts'));
// router.use('/posts',require('./posts'));

//For any further routes,access from here
//router.use('/routerName',require('./routerName'));
module.exports = router;
