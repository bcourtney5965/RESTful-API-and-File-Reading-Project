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
      fileName = fileName.substring(0, fileName.length - 5);
      const fileNameArr = fileName.split('_');
      const id = fileNameArr[0];
      const date = fileNameArr.slice(1).join('-');
      const queryString = `INSERT INTO documents (NAME, DATE, SCORE) VALUES (?, ?, ?)`;
      db.query(queryString, [id, date, score], (err, res) => {
        if (err) {
          throw err;
        }
        console.log('Last insert ID:', res.insertId);
      });
    });
  });
});
