const fs = require('fs');
const db = require('../db');
const calculateScore = require('./fileScorer');

fs.readdir('../../data', (err, files) => {
  if (err) {
    throw err;
  }
  files = files.slice(1);
  files.forEach( fileName => {
    fs.readFile(`../../data/${fileName}`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      const score = calculateScore(data);
      const queryString = `INSERT INTO documents (NAME, DATE, TIME, SCORE) VALUES (?, CURDATE(), CURTIME(), ?)`;
      db.query(queryString, [fileName, score], (err, res) => {
        if (err) {
          throw err;
        }
        console.log('Last insert ID:', res.insertId);
      });
    });
  });
});
