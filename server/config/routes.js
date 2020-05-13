// require express
const router = require('express').Router();

/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/homeController');

/**
 * Primary app routes.
 */
router.get('/', homeController.index);


module.exports = router;
