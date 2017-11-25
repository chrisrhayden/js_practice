// avatar-generator needs to be called ()
const avGen = require('avatar-generator')()
const bluIMd5 = require('blueimp-md5')
const fetch = require('node-fetch')
const faker = require('faker')

const myURL = 'https://fakeuser-92f5d.firebaseio.com/thing.json'
let apiCallCounter = 0

// for fake api
const getGender = (rate) => {
  if (Math.random() < rate) return 'male'
  else return 'female'
}

const fakeApi = async () => {
  // <---------- faker calls
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const gender = getGender(0.5)

  const email = faker.internet.email()
  const passWord = bluIMd5(faker.internet.password())

  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.state()
  const zip = faker.address.zipCode()
  // ---------->

  // promise a str of image bytes or whatever
  //const getAvatar = new Promise((resolve, reject) => {
  //  avGen(firstName, gender, 40).toBuffer((err, buffer) => {
  //    if (err) reject(new Error('cant get img, idk why', err))

  //    // when the buffer is finished convert to str and return/resolve
  //    resolve(`data:image/png;base64,${buffer.toString('base64')}`)
  //  })
  //})

    //avatar,
  // wait for the getAvatar promise to resolve then assign to avatar
  //const avatar = await getAvatar.then(resp => resp).catch(console.log)
  const myApiInfo = {
    apiCallCounter: apiCallCounter++,
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

const apiFetchCall = async () => {
  /* wait for fakeApi() call to resolve,
   * it will return a promise due to getAvatar() I guess */
  const myInit = {
    method: 'POST',
    body: JSON.stringify(await fakeApi())
  }

  // push to server, accept server response and convert
  const response = await fetch(myURL, myInit)
  const output = await response.json()

  return output
}

const makeAllApiCalls = async () => {
  // use async to block the fetch delete
  await fetch(myURL, {method: 'DELETE'})
  // make and array the fill with apiFetchCall function then map and call
  const allApiCalls = Array(100).fill(apiFetchCall).map((call) => call())

  /* if apiFetchCall returns a promise Promise.all will block
   * else if it just returns output its nonblocking,
   * eventually resolving and getting printed */
  Promise.all(allApiCalls)
    .then(console.log)
    .catch(console.log)
  console.log('apis call counter >>', apiCallCounter)
}

makeAllApiCalls()
console.log('api call counter >>', apiCallCounter)

/*
return new Promise((resolve, reject) => {
  resolve(output)
  reject(new Error('idk what happend'))
})

fetch(myURL, {method: 'DELETE'})
  .then(() => {
    // make and array with uncalled functions then map and call inside
    const allApiCalls = Array(100).fill(callApi).map((call) => call())
    take an array of called functions giving promises
    and wait till all resolve
    Promise.all(allApiCalls)
      .then(console.log)
      .catch(console.log)
  }) // end of the fetch delete .then
  .catch(console.log) // for the delete fetch call
*/
