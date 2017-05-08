const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/getScores/:id', controllers.scoresById);
router.get('/dateRange/:startDate/:endDate', controllers.dateRange);
// Method: Retrieve highest scored unique id
router.get('/highScore/:id', controllers.idHighScore);


module.exports = router;
