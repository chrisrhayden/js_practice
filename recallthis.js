const getSentenceFragment = (offset) => {
  return new Promise((resolve, reject) => {
    const pageSize = 3
    const sentence = [...'hello world']
    resolve({
      data: sentence.slice(offset, offset + pageSize),
      nextPage: offset +
                pageSize < sentence.length ? offset + pageSize : undefined
    })
    reject(new Error('idk what happend'))
  }) // from promis
}

const getSentence = (offset, callback) => {
  // MODIFY THE CODE HERE ------
  callback(getSentenceFragment(offset)
    .then((obj) => {
      let sent = [...obj.data]
      return [sent, getSentenceFragment(obj.nextPage)]
    })
    .then((list) => {
      let sent = [...list[0], list[1].data]
      return [sent, getSentenceFragment(list[1].nextPage)]
    })
    .then((list) => {
      let sent = [...list[0], list[1].data]
      return sent
    })
    .catch(console.log))
  // MODIFY THE CODE HERE ------
}

getSentence(0, (sentence) => console.log(sentence))
