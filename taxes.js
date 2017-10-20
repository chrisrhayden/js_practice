/*
 * scroog has p money
 * he will invest it
 * hew would like to know how much he will
 * hown meny years it will take yo get
 * x amount of money
 *
 * years = y
 * sum = s
 * intrest = i
 */

let principal = 1000.00
let desiredSum = 1100.00

const getYear = (sum) => {
  console.log(sum)
  let intrest = 0.05
  let tax = 0.18

  let yearlyIntrest = sum * intrest

  let yearlyTax = yearlyIntrest * tax

  let yearlyTotal = yearlyIntrest - yearlyTax
  return yearlyTotal
}

const getDistentSum = (desiredSum) => {
  let counter = 0
  while (true) {
    if (newSum >= desiredSum) {
      console.log(newSum)
      console.log(`it will take ${counter} number of years to reach ${desiredSum} or more`)
      return
    } else {
      yearlysum = getYear(newSum)
      newSum = newSum + yearlysum
    }
    counter++
  }
}

let yearlysum = getYear(principal)
let newSum = principal + yearlysum
console.log(yearlysum)
getDistentSum(desiredSum)
