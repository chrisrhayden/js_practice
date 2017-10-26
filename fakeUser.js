const faker = require('faker')
const bluIMd5 = require('blueimp-md5')
const fetch = require('node-fetch')
const avGen = require('avatar-generator')()

let apiCallCounter = 0

const getGender = (rate) => {
  if (Math.random < rate) return 'male'
  else return 'female'
}

const fakeApi = async () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const gender = getGender(0.5)

  const email = faker.internet.email()
  const passWord = bluIMd5(faker.internet.password())

  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.state()
  const zip = faker.address.zipCode()

  const getAvatar = new Promise((resolve, reject) => {
    avGen(firstName, gender, 400).toBuffer((err, buffer) => {
      if (err) reject(new Error('cant get img, idk why'))
      resolve(buffer.toString('base64'))
    })
  })

  // await getAvatar, it will return a str so no need for conversion
  let avatar = await getAvatar.then(resp => resp).catch(console.log)
  const myApiInfo = {
    apiCallCounter: apiCallCounter++,
    avatar,
    firstName,
    lastName,
    gender,
    email,
    passWord,
    streetAddress,
    city,
    state,
    zip
  }

  return myApiInfo
}

const callApi = async () => {
  /* is it because fakeApi runs async or promise that we need to wait on
   * or the init when fetch is called will be empty */
  let myInit = {
    method: 'POST',
    body: JSON.stringify(await fakeApi())
  }

  let response = await fetch(myURL, myInit)
  let output = await response.json()

  return new Promise((resolve, reject) => {
    resolve(output)
    reject(new Error('idk what happend'))
  })
}

let myURL = 'https://fakeuser-92f5d.firebaseio.com/thing.json'

fetch(myURL, {method: 'DELETE'})
  .then(() => {
    // make and array with uncalled functions then map and call inside
    const allApiCalls = Array(100).fill(callApi).map((call) => call())
    /* take an array of called functions giving promises
     * and wait till all resolve */
    Promise.all(allApiCalls)
      .then(console.log)
      .catch(console.log)
  }) // end of the fetch delete .then
  .catch(console.log) // for the delete fetch call
