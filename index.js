require('dotenv').config()
const express = require('express')
const cookieParser =require('cookie-parser')
const cryptoJs = require('crypto-js')
const axios = require('axios')
const db = require('./models')

const app = express()
const PORT = process.env.PORT || 8000
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public/'))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(`${new Date().toLocaleString()} ${req.url}`)
    console.log('request body:', req.body)
    // res.locals.myData = 'hi'
    next()
})

app.use(async (req,res, next) => {
    try {
        if(req.cookies.userId) {
            const decryptedPK = cryptoJs.AES.decrypt(req.cookies.userId, process.env.ENC_KEY)
            const decryptedPkString = decryptedPK.toString(cryptoJs.enc.Utf8)
            const user = await db.user.findByPk(decryptedPkString)
            res.locals.user = user
        } else {
            res.locals.user = null
        }
    } catch(err) {
        console.log(err)
    } finally {
        next()
    }
})

app.get('/', async(req, res)=> {
    console.log(res.locals)
    const bags = await db.user_fish.findAll()
    res.render('index.ejs', {
        bags:bags,
    })
})


app.use('/users', require('./controllers/users.js'))
app.use('/fish', require('./controllers/fish.js'))
app.use('/catches', require('./controllers/catches.js'))




app.listen(PORT, ()=> {
    console.log(`authenticating users on port ${PORT}`)
})