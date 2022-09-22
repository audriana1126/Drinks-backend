require('dotenv').config()
const axios = require('axios')
const mongoose = require('mongoose');
const { Drinks } = require('./models')



const { MONGODB_URI } = process.env

mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));


const seedingData = async () => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'); 
    const allDrinks = response.data.drinks
    console.log(allDrinks)

const deletedCoins = await Drinks.deleteMany({})
const addedDrinks = await Drinks.insertMany(allDrinks);
console.log("This is", addedDrinks)
    } catch (err) {
  console.log(err);
}
}
// Make a request for a user with a given ID

seedingData();
