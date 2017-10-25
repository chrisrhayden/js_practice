const faker = require('faker')
const bluIMd5 = require('blueimp-md5')
const fetch = require('node-fetch')

let apiCallCounter = 0

const fakeApi = () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const email = faker.internet.email()
  const passWord = bluIMd5(faker.internet.password())

  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.state()
  const zip = faker.address.zipCode()

  const myApiCall = {
    apiCallCounter: apiCallCounter++,
    firstName,
    lastName,
    email,
    passWord,
    streetAddress,
    city,
    state,
    zip
  }

  return myApiCall
}

const callApi = async () => {
  let myInit = {
    method: 'POST',
    body: JSON.stringify(fakeApi())
  }

  let response = await fetch(myURL, myInit)
  let output = await response.json()

  return new Promise((resolve, reject) => {
    resolve(output)
    reject(new Error('idk what happend'))
  })
}

let myURL = 'https://firstproj-9f9e1.firebaseio.com/thing.json'

fetch(myURL, {method: 'DELETE'})

const allApiCalls = Array(100).fill(callApi())

console.log(allApiCalls)

// Promise.all(allApiCalls).then(console.log).catch(console.log)
