const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/yours', async(req, res) => {
    try {
        const bags = await db.user_fish.findAll()
        res.render("catches/yours.ejs", {bags: bags});
    } catch(err) {
        console.log("Opps that didnt work")
    }
})

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
      const catchData = req.body;
      console.log(catchData)
      await db.user_fish.create({
        userId: req.body.userId,
        fishId: req.body.fishId,
        title: req.body.title,
        length: req.body.length,
        weight: req.body.weight,
        img: req.body.img,
        location: req.body.location,
        description: req.body.description
      })
      const bags = await db.user_fish.findAll()
      res.render("catches/yours.ejs", {bags: bags});
    } catch (err) {
      console.log('Oops That didnt work');
    }
  })



module.exports = router