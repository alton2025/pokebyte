const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express(); 
app.use(cors());

const port = 3000; 
const db = mysql.createConnection({
  host: 'host.docker.internal', 
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

app.get('/pokemon/:name', (req, res) => {
  const pokemonName = req.params.name; 
  const sql = `
    SELECT 
      cw.City, 
      cw.Region, 
      cw.Spring_Avg, 
      GROUP_CONCAT(DISTINCT swm.weather_condition ORDER BY swm.weather_condition) AS weather_conditions
    FROM 
      pkmn_info p
    JOIN 
      weather_type_map wtm1 ON p.Type1_ID = wtm1.type_id
    LEFT JOIN 
      weather_type_map wtm2 ON p.Type2_ID = wtm2.type_id
    JOIN 
      spring_weather_map swm ON swm.weather_condition IN (wtm1.weather_condition, COALESCE(wtm2.weather_condition, ''))
    JOIN 
      cityweather cw ON cw.Spring_Avg BETWEEN swm.min_temp AND swm.max_temp
    WHERE 
      p.Name = ? 
    GROUP BY 
      cw.City, cw.Region, cw.Spring_Avg;
  `;
  
  db.query(sql, [pokemonName], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).send('Database error');
    } else {
      if (results.length > 0) {
        res.json(results);  
      } else {
        res.status(404).send('Pokémon not found');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
