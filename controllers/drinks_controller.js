const express = require('express')
const router = express.Router()

 
const {Drinks} = require('../models')


router.get("/drinks", async (req, res) => {
	try {
    if (req.query.name) {
      res.json(await Drinks.find({strDrink: req.query.name}))
    } else {
      res.json(await Drinks.find({}))
    }
	} catch (error) {
		res.status(400).json(error);
	}
})


router.post("/drinks", async (req, res) => {
  try {
    res.json(await Drinks.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});


router.get("/:idDrink", async (req, res) => {
    try {
        res.json(await Drinks.findById(req.params.idDrink)); 
      } catch (error) {
        res.status(400).json(error);
      }
});



module.exports = router;


