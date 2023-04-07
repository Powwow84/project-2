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

const stringToEncrypt = 'hello i am a secret message'
const encryptionKey = 'myKey'

const myEncryption = cryptoJs.AES.encrypt(stringToEncrypt, encryptionKey)
console.log(myEncryption)
const decryptedMessage = cryptoJs.AES.decrypt(myEncryption.toString(), encryptionKey)
console.log(decryptedMessage.toString(cryptoJs.enc.Utf8))