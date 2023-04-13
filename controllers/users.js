const express = require('express')
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptoJs = require('crypto-js')
const uploadcareWidget = require("uploadcare-widget")

router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})


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
        console.log(err)
        res.redirect('/')
    }
    
})

router.get('/login', (req, res) => {
    console.log(req.query)
    res.render('users/login.ejs', {
        message: req.query.message ? req.query.message : null
    })
})

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
        res.redirect('/')
    }
    
})

router.get('/logout', (req, res)=> {
    console.log('logging user out')
    res.clearCookie('userId')
    res.redirect('/')
})


router.get('/profile', (req, res) =>{
    if(!res.locals.user) {
    res.redirect('/users/login?message="Your are not authorized to view that page. Please authenticate to continue')
    } else {
        res.render('users/profiles.ejs')
    }
})

router.get('/edit/:id', (req,res) => {
    res.render('users/edit.ejs')
})

router.put('/edit/:id', async (req,res) => {
    try{
        await db.user.update({
            user_name: req.body.user_name,
            description: req.body.description,
            user_img: req.body.my_file,
        },
        {
            where: {id: req.body.id}
        })
        res.redirect('/users/profile');
    }catch(err) {
        console.log('oops that didnt work')
    }
});

router.post("/profile/" , async (req,res) => {
    try{
        const species = await db.bucketlist.create({
            userId: user.id,
            fishId: req.params.id,
            name: req.body.id,
            img: req.body.img,
            wiki: req.body.wiki,
        }, {
            where: { id: req.params.id},
        })
        res.redirect('/users/profile', {species : species})
    }catch(err) {
        console.log("oops that didnt work")
    }
})



module.exports = router