const rot = (theStr, rotNum) => {
  const letterStr = 'abcdefghijklmnopqrstuvwxyz'

  let newStr = ''
  for (let letter of theStr) {
    const ind = letterStr.indexOf(letter)

    let newInd = ind + rotNum

    if (newInd % 26 === newInd) {
      newStr += letterStr[newInd]
    } else {
      newInd = newInd % 26
      newStr += letterStr[newInd]
    }
  }
  return newStr
}

console.log(rot('abc'))

export { rot }
