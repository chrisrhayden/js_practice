const faker = require('faker')
const bluIMd5 = require('blueimp-md5')
const fetch = require('node-fetch')



const getInfo = () => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const email = faker.internet.email()
  const passWord = bluIMd5(faker.internet.password())

  const streetAddress = faker.address.streetAddress()
  const city = faker.address.city()
  const state = faker.address.state()
  const zip = faker.address.zipCode()

  const myApiCall = {
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


const callApi = () => {
  let myURL = 'https://firstproj-9f9e1.firebaseio.com/'
  await fetch(myURL, {method: 'DELETE'})

  for (let i = 0; i < 100; i++) {
    let myInit = {
      method: 'POST',
      body: JSON.stringify(getInfo)
    }

    let response = await 
  }
}


console.log(getInfo())
