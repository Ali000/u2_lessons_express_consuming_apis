// server.js

const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.set('view engine', 'ejs');
axios.defaults.timeout = 10000;
// Define routes and middleware here

app.get('/', async (req, res) => {
  const catFactsUrl = 'https://cat-fact.herokuapp.com/facts';

  try {
    const response = await axios.get(catFactsUrl);
    const catFacts = response.data;
    // formattedCatFacts = catFacts.map(fact => fact.fact);
    res.render('index', { catFacts })
  } catch (error) {
    console.error('Error fetching cat facts:', error);
    res.status(500).send('Error fetching cat facts');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});