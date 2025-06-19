const express = require('express');
const app = express();
const serverless = require('serverless-http');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Portfolio Server Running on Vercel');
});

module.exports = app;
module.exports.handler = serverless(app);
