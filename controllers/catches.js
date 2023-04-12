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
        img: req.body.my_file,
        location: req.body.location,
        description: req.body.description
      })
      const bags = await db.user_fish.findAll()
      res.render("catches/yours.ejs", {bags: bags});
    } catch (err) {
      console.log('Oops That didnt work');
    }
  })

  router.get('/edit/:id', async (req, res) => {
  try {
    const userPost = await db.user_fish.findByPk(req.params.id);
    res.render('catches/edit', { userPost: userPost });
  } catch (err) {
    console.log("oops that didn't work");
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    await db.user_fish.destroy({ where: { id: req.params.id } });
    res.redirect('/catches/yours');
  } catch (err) {
    console.log("Oops, that didn't work");
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    await db.user_fish.update({
      userId: req.body.userId,
        fishId: req.body.fishId,
        title: req.body.title,
        length: req.body.length,
        weight: req.body.weight,
        img: req.body.my_file,
        location: req.body.location,
        description: req.body.description
    }, { 
      where: { id: req.params.id } 
    });
    res.redirect('/catches/yours');
  } catch (err) {
    console.log("Oops, that didn't work");
  }
});

module.exports = router