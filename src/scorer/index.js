// get all files
// for each file
//      put file name in DB

const fs = require('fs');
const db = require('../db');

fs.readdir('../../data', (err, files) => {
  if (err) {
    throw err;
  }
  // files = files.slice(1);
  files.forEach( (name, mockScore)  => {
    fs.readFile(`../../data/${name}`, 'utf8', (error, data) => {
      if (error) {
        throw error;
      }
      const queryString = `INSERT INTO documents (NAME, DATE, TIME, SCORE) VALUES (?, CURDATE(), CURTIME(), ?)`;
      const fileInfo = [name, mockScore];
      db.query(queryString, fileInfo, (err, res) => {
        if (err) {
          throw err;
        }
        console.log('Last insert ID:', res.insertId);
      });
    });
  });
});
