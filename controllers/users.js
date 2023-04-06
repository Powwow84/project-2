const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})


router.post('/', (req, res) => {
    console.log(req.body)
    



    res.send('create a new user if they do not exist already in the db, log a user in')
})

router.get('/', (req, res) => {
    res.send('show a form that lets the user log in')
})

router.post('/login', (req, res) => {
    res.send('verify credentials that are given by the user to log in')
})

router.get('/logout', (req, res)=> {
    res.send('log a user out')
})


router.get('/profile', (req, res) =>{
    res.send('show the currently logged in user their personal profile page')
})



module.exports = router