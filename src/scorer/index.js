// get all files
// for each file
//      put file name in DB

const fs = require('fs');
const db = require('../db');

fs.readdir('../../data', (err, files) => {
  if (err) {
    throw err;
  }
  console.log(`files = ${files}`);
})