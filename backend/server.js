const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000; 
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'POKEBYTE2025', 
  database: 'PokemonDB' 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pokemon', (req, res) => {
  const sql = 'SELECT * FROM pkmn_info';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Database error');
    } else {
      res.json(results); 
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
