const express = require('express');
const categoryControllers = require('../contrallers/categoryControllers');

const router = express.Router();

router.route('/').post(categoryControllers.createCategory);

module.exports = router;