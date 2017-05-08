const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/test', controllers.test);
router.get('/getScores/:id', controllers.scoresById);

module.exports = router;