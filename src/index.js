const express = require('express');
const app = express();
const port = process.env.port || 3000;
const middleware = require('./middleware');
const router = require('./router.js');

// connect db
const db = require('./db');

// connect middleware
middleware(app);

// routes
app.use('/api', router);

app.listen(port, () => {
  console.log(`RESTful API listening on port: ${port}`);
});