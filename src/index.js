const express = require('express');
const app = express();
const port = process.env.port || 3000;
const db = require('./db');

app.listen(port, () => {
  console.log(`RESTful API listening on port: ${port}`);
});