const mongoose = require("mongoose"); // Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. 

// users can buy multiple kinds of coins

const drinkSchema = new mongoose.Schema({
        strDrink: {type: String, default: null},  //if strdrink title isn't present, default to nothing
        strDrinkThumb: {type: String, default: null},
        idDrink: {type: String, default: null}, 
},
{
    timestamps: true
})


const Drink = mongoose.model("Drink", drinkSchema); 

module.exports = Drink;

