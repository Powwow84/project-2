// const crypto = require('crypto')

// const hash = crypto.createHash('sha256')


// hash.update('a')

// const digest = hash.digest('hex')
// console.log('sha256', digest)


// const bcrypt = require('bcrypt')

// const userPassword = 'hello123'
// const hashedPassword = bcrypt.hashSync(userPassword, 12)

// console.log(hashedPassword)
// console.log(bcrypt.compareSync('nope', hashedPassword))

// const cryptoJs = require('crypto-js')

// const stringToEncrypt = 'hello i am a secret message'
// const encryptionKey = 'myKey'

// const myEncryption = cryptoJs.AES.encrypt(stringToEncrypt, encryptionKey)
// console.log(myEncryption)
// const decryptedMessage = cryptoJs.AES.decrypt(myEncryption.toString(), encryptionKey)
// console.log(decryptedMessage.toString(cryptoJs.enc.Utf8))
const axios = require("axios")
const db = require('./models')

db._catch.create({
    userId: 2,
    fishId: 1,
    catch_name: "huge tuna", 
    length: 10,
    weight: 10,
    description: "it was an awesome",
    img: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL644648_p7nd0z.jpg'
  }).then(_catch => {
    console.log(_catch);
  }).catch(err => {
    console.log(err);
  });