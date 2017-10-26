const avGen = require('avatar-generator')()

const getAvatar = new Promise((resolve, reject) => {
  avGen('myName', 'male', 400).toBuffer((error, buffer) => {
    if (error) {
      reject(new Error('couldnt get an image'))
    }
    resolve(buffer.toString('base64'))
  })
})

getAvatar
  .then(console.log)
  .catch(console.log)
//.then(resp => resp.json())
