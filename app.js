// Load environment variables from .env file
require('dotenv').config({
  path: '.env',
})

const express = require('express')
const { Pool } = require('pg')

const app = express()

const creditCardsRouter = require('./end_points/credit_cards'); // Require the credit cards router

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/credit-cards', creditCardsRouter); // Use the credit cards router


const serveFavicon = require('serve-favicon');

// Static Files
app.use(express.static('public'));

app.use(serveFavicon(__dirname + '/public/images/favicons/favicon.ico'));


// Set the views directory to the 'views' folder
app.set('views', './views')

// Set the view engine to 'ejs'
app.set('view engine', 'ejs')

// Create a new Pool instance with the database configuration
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
})

// Use the pool to make database queries
pool.query('SELECT NOW()', (err, res) => {
  // console.log(err, res)
  pool.end()
})

// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('base')
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})