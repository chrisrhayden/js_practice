const avGen = require('avatar-generator')()

avGen('myUser', 'male', 400)
  .write('/home/chris/proj/js_practice/testimg.jpg', (err) => {
    console.log(err)
  })
