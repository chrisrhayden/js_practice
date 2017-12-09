const shuffElement = (test) => {
  const testL = test.length
  let returnArray = []
  for (let i = 0; i < testL - 1; i++) {
    const index = Math.floor(Math.random() * testL)
    returnArray.push(test[index])
  }

  return returnArray
}

const missingElement = (a1, a2) => {
  const long = a1.length > a2.length ? a1 : a2
  const short = a1.length < a2.length ? a1 : a2

  for (let i = 0; i < long.length; i++) {
    if (short.includes(long[i])) {
      continue
    } else if (!short.includes(long[i])) {
      return long[i]
    }
  }
}

const array1 = [1, 2, 3, 4, 5, 6, 7]

const shuff = shuffElement(array1)
const c = missingElement(array1, shuff)
console.log(c, 'is the missing number')
console.log('first arry', array1)
console.log('shuff array', shuff)
