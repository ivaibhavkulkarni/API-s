const express = require("express");
const app = express();
const fs = require('fs');


const port = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("Welcome to Vaibhav's API's")
});

app.get('/api/characters', (req, res) => {
  try {
    // Read the data.json file
    const rawData = fs.readFileSync('data.json');
    const characters = JSON.parse(rawData).characters;
    res.json(characters);
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});