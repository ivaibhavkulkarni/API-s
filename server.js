const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/data', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send('data.json not found');
    } else {
      res.status(500).send('Server error');
    }
  }
});

app.get("/", (req,res) => {
    res.send("Welcome to Vaibhav's API's")
});

app.listen(3000, () => console.log('Server running'));