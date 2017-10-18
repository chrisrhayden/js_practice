
const arrayFunc = (test) => {
  for (let i in test) {
    if (test[i] === 1) {
      let next = i + 1
      let nextAfter = i + 2
      if (test[next] === 2 && test[nextAfter] === 3) {
        console.log('>>>>', next, nextAfter)
        return true
      }
    }
  }
}

const testList = [[1, 1, 2, 3, 1], [1, 1, 2, 4, 1], [1, 1, 2, 1, 2, 3]]

for (let test of testList) {
  console.log(arrayFunc(test))
}
