const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
const uploadcareWidget = require("uploadcare-widget")


// route to land on the user create page

router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

// route to create a new user. Checks to see if a user exist already but looking at the email. If not it creates a user with a hashed password, name, and image

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const [newUser, created] = await db.user.findOrCreate({
            where: {
                email: req.body.email
            }
        })

        if(!created) {
            console.log('user account exists')
            res.redirect('/users/login?message=Please login to your accoount to continue')
        } else {
            const hashedPassed = bcrypt.hashSync(req.body.password, 12)
            newUser.password = hashedPassed
            newUser.user_name = req.body.user_name
            newUser.user_img = "https://i.imgur.com/An0tyUy.jpg"
            await newUser.save()
            const encryptedPk = cryptoJs.AES.encrypt(newUser.id.toString(), process.env.ENC_KEY)
            res.cookie('userId', encryptedPk.toString())
            res.redirect('/catches/all')
        }

    } catch(err) {
        console.log("oops that didnt work")
    }
    
})

// route to land on the user login page

router.get('/login', (req, res) => {
    console.log(req.query)
    res.render('users/login.ejs', {
        message: req.query.message ? req.query.message : null
    })
})

// route to login, it checks to see if the email and password is correct and sends an error if either are wrong

router.post('/login', async (req, res) => {
    try {
        const foundUser = await db.user.findOne({
            where: {
                email: req.body.email
            }
        })
        const failedLoginMessage = 'Incorrect email or password'
        if(!foundUser) {
            console.log('user not found')
            res.redirect('/users/login?message=' + failedLoginMessage)
        } else if (!bcrypt.compareSync(req.body.password, foundUser.password)){
            console.log('incorrect password')
            res.redirect('/users/login?message=' +failedLoginMessage)
        } else {
            const encryptedPk = cryptoJs.AES.encrypt(foundUser.id.toString(), process.env.ENC_KEY)
            res.cookie('userId', encryptedPk.toString())
            res.redirect('/catches/all')
        }
    }catch(err) {
        console.log(err)
      
    }
    
})

// Route to log out

router.get('/logout', (req, res)=> {
    console.log('logging user out')
    res.clearCookie('userId')
    res.redirect('/')
})

// route to land on the user profile page

router.get('/profile', (req, res) =>{
    if(!res.locals.user) {
    res.redirect('/users/login?message=Please login')
    } else {
        res.render('users/profiles.ejs')
    }
})

// route to land on the user edit page

router.get('/edit/:id', (req,res) => {
    if(!res.locals.user) {
        res.redirect('/users/login?message=You need to logged in to use this feature')
      } else {
        res.render('users/edit.ejs')
      }
})

// route to edit your users profile. updating here updates entries in the data table

router.put('/edit/:id', async (req,res) => {
    try{
        await db.user.update({
            user_name: req.body.user_name
        },
        {
            where: {id: res.locals.user.id}
        })

        if(req.body.description) {
        await db.user.update({
            description: req.body.description
        },
        {
            where: {id: res.locals.user.id}
        })
        }

        if(req.body.my_file) {
        await db.user.update({
            user_img: req.body.my_file
        },
        {
            where: {id: res.locals.user.id}
        })
        }

        res.redirect('/users/profile');
    }catch(err) {
        console.log("oops that didnt work")
    }
});

// this is the route to add to your bucketlist still wip. I'm not commenting out this code but i'll remove the display button on the website

router.get('/bucketlists/', async(req, res) => {
    try{
        const bucket = await db.bucketlist.findAll({
            where: {userId: res.locals.user.id}
          })
      res.render("users/bucketlists", { bucket: bucket });
    }catch(err){
        console.log('oops that didnt work')
    }
})

router.post("/bucketlists", async (req, res) => {
    try {
        await db.bucketlist.findOrCreate({
            where: {
              userId: res.locals.user.id,
              fishId: req.body.fishId
            },
            defaults: {
              name: req.body.name,
              img: req.body.img,
              wiki: req.body.wiki
            }
          });

          const bucket = await db.bucketlist.findAll({
            where: {userId: res.locals.user.id}
          })
      res.render("users/bucketlists", { bucket: bucket });
    } catch (err) {
      console.log("oops that didn't work");
    }
  });




module.exports = router