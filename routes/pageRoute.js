const express = require('express');
const pageControllers = require('../contrallers/pageControllers');

const router = express.Router();

router.route('/').get(pageControllers.IndexPage)
router.route('/about').get(pageControllers.AboutPage);
router.route('/register').get(pageControllers.RegisterPage);
router.route('/login').get(pageControllers.LoginPage);
module.exports = router;