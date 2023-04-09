const express = require('express')
const router = express.Router()
const db = require('../models')
const {Op} = require('sequelize');

router.get('/', async(req, res) => {
    const fish = await db.fish.findAll()
    res.render('fish/fish.ejs', {
        fish:fish,
    })
})



router.get('/show', async (req, res) => {
  try {
    const fish = await db.fish.findAll({
      where: {
        name: {
          [Op.like]: `%${req.query.fishSearch}%`
        }
      }
    });
    res.render('fish/show.ejs', {
      fish: fish
    });
  } catch (err) {
    console.log('Oops That didnt work');
  }
});




module.exports = router