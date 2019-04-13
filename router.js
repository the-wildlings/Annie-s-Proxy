const router = require('express').Router();
const controller = require('./controller.js');

router.route('/').get(controller.get);

// router.route('/beats').get(controller.getBody);

module.exports = router;
