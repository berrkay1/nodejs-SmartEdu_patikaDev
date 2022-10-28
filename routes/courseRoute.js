const express = require('express');
const courseControllers = require('../contrallers/courseControllers');

const router = express.Router();

router.route('/').post(courseControllers.createCourse);
router.route('/').get(courseControllers.getAllCourses);

module.exports = router;