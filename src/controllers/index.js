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
  const startDate = new Date(req.params.startDate);
  const endDate = new Date(req.params.endDate);


  let startDay = startDate.getDate();
  if (startDay < 10) {
    startDay = `0${startDay}`;
  }
  let startMonth = startDate.getMonth() + 1;
  if (startMonth < 10) {
    startMonth = `0${startMonth}`;
  }

  let endDay = endDate.getDate();
  if (endDay < 10) {
    endDay = `0${endDay}`;
  }
  let endMonth = endDate.getMonth() + 1;
  if (endMonth < 10) {
    endMonth = `0${endMonth}`;
  }

  db.query(queryString, [startDate, endDate], (err, data) => {
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
