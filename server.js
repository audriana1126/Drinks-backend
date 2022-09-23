const express = require('express');
const app = express();
require('dotenv').config() 
const PORT = process.env.PORT || 4000;
const cors = require('cors'); 
const morgan = require('morgan'); 





// * Middleware
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));
app.use(cors()); 
app.use(morgan('dev')); 
app.use('/', drinksController)

// * Controllers
const drinksController = require('./controllers/drinks_controller')

 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


