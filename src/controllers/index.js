const db = require('../db');

// Method: Retrieve scores for a unique id(name eg: 'cari);
exports.scoresById = (req, res) => {
  const queryString = 'SELECT score FROM documents WHERE NAME = ?;';
  db.query(queryString, [req.params.id], (err, data) => {
    if (err) {
      return res.sendStatus(404).send(err);
    }
    data = data.map(obj => obj.score);
    res.status(200).json({"data": data});
  });
}

// Method: Retrieve all scores for a custom date range.
exports.dateRange = (req, res) => {
  const queryString = 'SELECT score FROM documents WHERE date BETWEEN ? AND ?;';
  db.query(queryString, [req.params.startDate, req.params.endDate], (err, data) => {
    if (err) {
      return res.sendStatus(404).send(err);
    }
    data = data.map(obj => obj.score);
    res.status(200).json({"data": data});
  });
}

// Method: Retrieve highest scored unique id (returns a name)
exports.idHighScore = (req, res) => {
  // include name and score for easier data visualizing
  const queryString = 'SELECT name, score FROM documents WHERE score = (SELECT Max(score) FROM documents);';
  db.query(queryString, (err, data) => {
    if (err) {
      return res.sendStatus(404).send(err);
    }
    data = data.map(obj => obj.name);
    res.status(200).json({"data": data[0]});

  })
}

// Method: Retrieve lowest scored unique id (returns a name)
exports.idLowestScore = (req, res) => {
  // include name and score for easier data visualizing
  const queryString = 'SELECT name, score FROM documents WHERE score = (SELECT Min(score) FROM documents);';
  db.query(queryString, (err, data) => {
    if (err) {
      return res.sendStatus(404).send(err);
    }
    data = data.map(obj => obj.name);
    res.status(200).json({"data": data[0]});
  })
}

// // Method: Finds the average score for all runs see project layout below
exports.averageScore = (req, res) => {
  const queryString = 'SELECT score FROM documents;';
  db.query(queryString, (err, data) => {
    if (err) {
      return res.sendStatus(404).send(err);
    }
    const total = data.reduce((total, cur) => {
      return total + cur.score;
    }, 0);
    const response = String(total/data.length);
    res.status(200).json({"data": response});
  })
}
