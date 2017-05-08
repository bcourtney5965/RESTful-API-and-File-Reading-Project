const db = require('../db');

// Method: Retrieve scores for a unique id(name eg: 'cari);
const scoresById = (req, res) => {
  const queryString = 'SELECT score FROM documents WHERE NAME = ?;';
  db.query(queryString, [req.params.id], (err, data) => {
    if (err) {
      throw new Error(err);
    }
    data = data.map(obj => obj.score);
    res.send(data);
  });
}

// Method: Retrieve all scores for a custom date range.
const dateRange = (req, res) => {
  const queryString = 'SELECT score FROM documents WHERE date BETWEEN ? AND ?;';
  db.query(queryString, [req.params.startDate, req.params.endDate], (err, data) => {
    if (err) {
      throw new Error(err);
    }
    data = data.map(obj => obj.score);
    res.send(data);
  });
}

exports.scoresById = scoresById;
exports.dateRange = dateRange;
