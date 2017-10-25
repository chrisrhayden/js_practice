/*
const abbriv = (words) => {
  let re = /\W/g
  let newWords = words.replace(re, ' ')
  let wordList = newWords.split(' ')
  console.log(wordList)
  let newList = []
  for (let word of wordList) {
    if (word.length > 3) {
      console.log(word)
      let wordNum = word.length - 2
      newList.push(`${word}: ${word[0]} ${wordNum} ${word[word.length - 1]}`)
    }
  }
  return newList
}

const abbriv = (words) => {
  let fullList = []
  let re = /\W/g

  let newWords = words.replace(re, ' ').split(' ')
  let newList = newWords.filter(word => word.length > 3)

  for (let word of newList) {
    let wordNum = word.length - 2
    fullList.push(`${word}: ${word[0]} ${wordNum} ${word[word.length - 1]}`)
  }

  return fullList
}
*/

const abbriv = (words) => {
  let fullList = []

  let newWords = words.split(' ')
  console.log(newWords)
  let newList = newWords.filter(word => word.length > 3)

  for (let word of newList) {
    let wordNum = word.length - 2
    fullList.push(`${word}: ${word[0]}${wordNum}${word[word.length - 1]}`)
  }

  return fullList
}


let test = 'elephant-rides are really fun!'
console.log(abbriv(test))
