const express = require('express');
const pageControllers = require('../contrallers/pageControllers');

const router = express.Router();

router.route('/').get(pageControllers.IndexPage)
router.route('/about').get(pageControllers.AboutPage);

module.exports = router;