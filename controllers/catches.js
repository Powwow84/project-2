const express = require('express')
const router = express.Router()
const db = require('../models')

// route to land on the all catches page. This sends information from the user_fish table and includes information from the user and fish tables

router.get("/all", async(req,res) => {
  const bags = await db.user_fish.findAll({
    include: [
      { model: db.user },
      { model: db.fish }
    ]
  })
    res.render('catches/all', {
        bags:bags,
    })
})

// route to land on the your catches page. the object bags is all logged catches and it returns catches based on a userId from the user_fish table

router.get('/yours', async(req, res) => {
    try {
        const bags = await db.user_fish.findAll()
        res.render("catches/yours.ejs", {bags: bags});
    } catch(err) {
        console.log("Opps that didnt work")
    }
})

// route to land on the add catch page. This pulls the species of fish from the tile that was created and uses the id to find a specific fish and populates the id into a hidden part of the form

router.get("/add", async (req, res) => {
    try {
        const speciesId = req.query.speciesId;
        const species = await db.fish.findByPk(speciesId);
        res.render("catches/add.ejs", {species: species});
    } catch (err) {
        console.log(err);
    }
})

// route creates a new catch  entry based on an object passed to the forms page from the fish page + information that the user inputs themselves

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

// route to land on the specific catch page. Object info used on this page is passed from the your catches page. Specfically the post itself contians the info

  router.get('/edit/:id', async (req, res) => {
  try {
    const userPost = await db.user_fish.findByPk(req.params.id);
    res.render('catches/edit', { userPost: userPost });
  } catch (err) {
    console.log("oops that didn't work");
  }
});

// route deletes a post

router.delete('/remove/:id', async (req, res) => {
  try {
    await db.user_fish.destroy({ where: { id: req.params.id } });
    res.redirect('/catches/yours');
  } catch (err) {
    console.log("Oops, that didn't work");
  }
});

// route to update a specific post. Information is passed from the post itself as a object which we use to populate some fields so the user doesnt have to re-enter them. this object comes from the your catches page

router.put('/edit/:id', async (req, res) => {
  try {
    await db.user_fish.update({
      userId: req.body.userId,
      fishId: req.body.fishId,
      title: req.body.title,
      length: req.body.length,
      weight: req.body.weight,
      location: req.body.location,
    }, { 
      where: { id: req.params.id } 
    });

    if(req.body.my_file) {
    await db.user_fish.update({
      img: req.body.my_file
    }, { 
      where: { id: req.params.id } 
    });
    }

    if(req.body.description) {
      await db.user_fish.update({
        description: req.body.description
      }, { 
        where: { id: req.params.id } 
      });
      }

    res.redirect('/catches/yours');
  } catch (err) {
    console.log("Oops, that didn't work");
  }
});

module.exports = router