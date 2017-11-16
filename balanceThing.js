const balancedBrackets = (theStr) => {
  const openTags = ['(', '[', '{']
  const closeTags = [')', ']', '}']

  let openList = []
  let closedList = []
  for (let i in theStr) {
    if (openTags.includes(theStr[i])) {
      openList.push(theStr[i])
    } else if (closeTags.includes(theStr[i])) {
      const ind1 = closedList.indexOf(theStr[i])
      const ind2 = openList.indexOf(theStr[i - 1])
      if (ind1 === ind2) {
        console.log(theStr[i], theStr[i - 1])
        openList.pop()
      } else {
        closedList.push(theStr[i])
      }
    }
  }
  if (openList) {
    console.log('>>>', openList.join('') + closedList.join(''))
    return balancedBrackets(openList.join('') + closedList.join(''))
  } else if (!openList) {
    return true
  } else {
    console.log('idk what to do, i guse its false')
    return false
  }
}

console.log(balancedBrackets('()[]{}(([])){[()][]}'))
console.log(balancedBrackets('()[]{}(([]))[{()][]}'))
