const db = require('../db');

function test(req, res) {
  console.log(`inside test`);
  res.send('works!')
}
// Method: Retrieve scores for a unique id(name eg: 'cari);
const scoresById = (req, res) => {
  console.log(`scores by id`);
  console.log(`req.params = ${req.params}`);
  console.log(`req.params.id = ${req.params.id}`);
  const nameId = req.params.id;
  const queryString = 'SELECT score FROM documents WHERE NAME = ?;';
  db.query(queryString, [nameId], (err, data) => {
    if (err) {
      res.err(`err = ${err}`);
      throw new Error(`err = ${err}`);
    }
    console.log(`inside res!`);
    console.log(`data instanceof Array = ${data instanceof Array}`);
    console.log(`data = ${data}`);
    data = data.map(obj => obj.score);
    res.send(data);
  });
}

exports.test = test;
exports.scoresById = scoresById;