const fs = require('fs');
const db = require('../db');
const calculateScore = require('./fileScorer');

fs.readdir('../../data', (err, files) => {
  if (err) {
    throw err;
  }
  let rows = [];
  files = files.slice(1);
  files.forEach( fileName => {
    fs.readFile(`../../data/${fileName}`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      fileName = fileName.substring(0, fileName.length - 5);
      const fileNameArr = fileName.split('_');
      const id = fileNameArr[0];
      const date = fileNameArr.slice(1).join('-');
      const score = calculateScore(data);
      rows.push([id, date, score]);
      if (rows.length === files.length ) {
        const queryString = `INSERT INTO documents (NAME, DATE, SCORE) VALUES ? on duplicate key update score = ?`;
        db.query(queryString, [rows], (err, res) => {
          if (err) {
            throw err;
          }
          console.log('Last insert ID:', res.insertId);
        });
      }
    });
  });
});
