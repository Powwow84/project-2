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

// db.user_fish.create({
//     userId: 2,
//     fishId: 1,
//     title: "huge tuna", 
//     length: 10,
//     weight: 10,
//     description: "it was an awesome",
//     img: 'https://www.thefisherman.com/wp-content/uploads/2021/05/NOAA-NEWS.jpg',
//     location: "Mauritius"
//   }).then(_catch => {
//     console.log(_catch);
//   }).catch(err => {
//     console.log(err);
//   });


db.user.update(
  { email: "Test3@gmail" },
  { where: { id: 3 } }
)
.then(numRowsAffected => {
  if (numRowsAffected > 0) {
    console.log("User's name updated successfully");
  } else {
    console.log("No rows were updated");
  }
})
.catch(error => console.log(error));

  