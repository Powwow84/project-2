const express = require('express')
const router = express.Router()
const db = require('../models')

router.get("/add", async (req, res) => {
    try {
        const speciesId = req.query.speciesId;
        const species = await db.fish.findByPk(speciesId);
        res.render("catches/add.ejs", {species: species});
    } catch (err) {
        console.log(err);
        res.send("Oops, something went wrong");
    }
})

router.post('/add', async (req, res) => {
    try {
    //   const catchData = req.body;
    //   const newCatch = await db.bagged.create(catchData);
      res.render('catches/yours');
    } catch (err) {
      console.log('Oops That didnt work');
    }
  })



module.exports = router