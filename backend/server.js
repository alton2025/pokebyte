const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'host.docker.internal', 
  user: 'root',
  password: 'POKEBYTE2025',
  database: 'PokemonDB',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/weather', (req, res) => {
  const { city, season } = req.query;

  if (!city || !season) {
    return res.status(400).send("Please provide both 'city' and 'season' query parameters.");
  }

  const seasonLower = season.toLowerCase();

  const seasonColumnMap = {
    spring: 'Spring_Avg',
    summer: 'Summer_Avg',
    fall: 'Fall_Avg',
    winter: 'Winter_Avg',
  };

  const cityWeatherColumn = seasonColumnMap[seasonLower];
  if (!cityWeatherColumn) {
    return res.status(400).send("Invalid season. Must be one of: spring, summer, fall, winter.");
  }

  const sql = `
    SELECT 
      p.Name AS PokemonName,
      p.Image,
      p.Type1,
      p.Type2,
      cw.City,
      cw.Region,
      CONCAT(MIN(swm.min_temp), ' - ', MAX(swm.max_temp)) AS Season_Temp_Range,
      GROUP_CONCAT(DISTINCT swm.weather_condition ORDER BY swm.weather_condition SEPARATOR ', ') AS WeatherConditions
    FROM
      cityweather cw
    JOIN spring_weather_map swm
      ON (cw.${cityWeatherColumn} BETWEEN swm.min_temp AND swm.max_temp)
    JOIN weather_type_map wtm
      ON swm.weather_condition = wtm.weather_condition
    JOIN pkmn_info p
      ON (p.Type1_ID = wtm.type_id OR (p.Type2_ID IS NOT NULL AND p.Type2_ID = wtm.type_id))
    WHERE
      cw.City = ?
    GROUP BY 
      p.Name, p.Image, p.Type1, p.Type2, cw.City, cw.Region
    ORDER BY p.Name;
  `;

  db.query(sql, [city], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error');
    }
    if (results.length === 0) {
      return res.status(404).send('No Pokémon found for the given city and season.');
    }
    res.json(results);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
