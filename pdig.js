/*
const testNum = (num) => {
  const numS = num.split('')
  const numA = numS[0]
  const numB = numS[1]
  if (numB) {
    const sumNum = Math.pow(numA, 1) + Math.pow(numB, 2)
    if (sumNum === num) return sumNum
  } else {
    return
  }
}
*/

const testNum = (num) => {
  const numS = num.toString().split('').map((num) => parseInt(num))

  const numList = []
  for (let i in numS) {
    let numP = Math.pow(numS[i], i)
    numList.push(numP)
  }
  const sumNum = numList.reduce((endNum, curNUm) => endNum + curNUm)
  console.log()
  if (numList === num) return sumNum
}

const loopRange = (a, b) => {
  let solution = Array.from({length: b}, (a, i) => {
    testNum(i)
  })
  //console.log('>> solution <<<', solution)
}

loopRange(1, 100)
