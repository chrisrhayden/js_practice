const getSentenceFragment = (offset, callback) => {
  const pageSize = 3
  const sentence = [...'hello world']
  // eslint-disable-next-line standard/no-callback-literal
  setTimeout(() => callback({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset +
        pageSize < sentence.length ? offset + pageSize : undefined
  }), 500)
}

const getSentence = (offset, callback) => {
  /*
  let sentence = []
  const myCall = (obj) => {
    if (obj.data.length >= 1) {
      sentence.push(...obj.data)
      getSentenceFragment(obj.nextPage, myCall)
    } else {
      callback(sentence.join(''))
    }
  }

  getSentenceFragment(offset, myCall)
  */

  getSentenceFragment(offset, (obj) => {
    if (obj.data.length >= 1) {
      sentence.push(...obj.data)
      getSentence(obj.nextPage, callback)
    } else {
      callback(sentence.join(''))
    }
  })

  console.log('>>>> ')
  return []
}

let sentence = []
getSentence(0, (sentence) => console.log(sentence))
