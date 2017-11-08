const test = [1, 2, [3, [4], 5, 6], 7]

let newA = []
const flattenArray = (test) => {
  for (let value of test) {
    const valType = typeof value
    if (valType === 'object') {
      flattenArray(value)
    } else {
      newA.push(value)
    }
  }
}

flattenArray(test)
console.log('>>>', newA)
