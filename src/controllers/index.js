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

// Method: Retrieve highest scored unique id (returns an name)
const idHighScore = (req, res) => {
  // include name and score for easier data visualizing
  const queryString = 'SELECT name, score FROM documents WHERE score = (SELECT Max(score) FROM documents);';
  db.query(queryString, [req.params.id], (err, data) => {
    if (err) {
      throw new Error(err);
    }
    data = data.map(obj => obj.name);
    res.send(data[0]);
  })
}

exports.scoresById = scoresById;
exports.dateRange = dateRange;
exports.idHighScore = idHighScore;
