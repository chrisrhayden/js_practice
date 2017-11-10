let stakObj = {}
const stackFunc = (value, add = true) => {
  console.log(value)
  const addToStack = () => {
    stakObj[Object.keys(stakObj).length + 1] = value
  }
  const removeFromStack = () => {
    delete stakObj[Object.keys(stakObj).length]
  }

  if (add) {
    addToStack(value)
  } else {
    removeFromStack()
  }
}

stackFunc(10)
console.log(stakObj)
stackFunc(0)
console.log(stakObj)
stackFunc(null, false)
console.log(stakObj)
