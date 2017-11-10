let stackObj = {}
const stackMachine = (value) => {
  if (typeof value === 'number') {
    stackObj[Object.keys(stackObj).length + 1] = value
  }
  if (value === '+' && Object.keys(stackObj).length >= 2) {
    const firstInd = Object.keys(stackObj).length
    const secondInd = Object.keys(stackObj).length - 1
    const newVal = stackObj[firstInd] + stackObj[secondInd]
    delete stackObj[firstInd]
    delete stackObj[secondInd]
    stackObj[Object.keys(stackObj).length + 1] = newVal
  }
  if (value === '*' && Object.keys(stackObj).length >= 2) {
    const firstInd = Object.keys(stackObj).length
    const secondInd = Object.keys(stackObj).length - 1
    const newVal = stackObj[firstInd] * stackObj[secondInd]
    delete stackObj[firstInd]
    delete stackObj[secondInd]
    stackObj[Object.keys(stackObj).length + 1] = newVal
  }
}

const stackParse = (values) => {
  for (let val of values) {
    const mayNum = parseInt(val)
    if (typeof mayNum === 'number') {
      console.log(mayNum)
      stackMachine(mayNum)
    } else {
      console.log(val)
      stackMachine(val)
    }
  }
}

stackParse('13+627+')
console.log(stackObj)
