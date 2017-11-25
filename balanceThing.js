const balancedBrackets = (theStr) => {
  const openTags = ['(', '[', '{']
  const closeTags = [')', ']', '}']

  let openList = []
  let closList = []

  for (let i in theStr) {
    if (openTags.includes(theStr[i])) {
      openList.push(theStr[i])
    } else if (closeTags.includes(theStr[i])) {
      const ind1 = closeTags.indexOf(theStr[i])
      const otag = openList.pop()
      const ind2 = openTags.indexOf(otag)
      if (ind1 !== ind2) {
        return false
      }
    }
  }
  console.log(openList, closList)
  return openList.length === 0
}

console.log(balancedBrackets('()[]{}(([])){[()][]}')) // true)
console.log(balancedBrackets('())[]{}')) // false
console.log(balancedBrackets('[(])')) // false
/*
console.log(balancedBrackets('()[]{}(([])){[()][]}')) // true
console.log(balancedBrackets('()[]{}(([]))[{()][]}')) // false
console.log(balancedBrackets('())[]{}')) // false
console.log(balancedBrackets('[(])')) // false
*/
