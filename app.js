const express = require('express');
const app = express();


app.get('/', (req, res) => {
  const message = process.env.APP_MESSAGE || "Hello form defaults!";
  const version = process.env.APP_VERSION || "1.0.0";

  res.json({ 
    message: message, 
    version: version, 
    hostname: require('os').hostname(),
    time: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/error', (req, res) => {
  process.exit(1);
});

module.exports = app;
