const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/getScores/:id', controllers.scoresById);
router.get('/dateRange/:startDate/:endDate', controllers.dateRange);

module.exports = router;
