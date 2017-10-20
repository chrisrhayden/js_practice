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

const getSentence =  async (offset, callback) => {

  const thing1 = await getSentenceFragment(offset, () => {})
  const thing2 = await getSentenceFragment(offset, () => {})
  const thing3 = await getSentenceFragment(offset, () => {})
  const thing4 = await getSentenceFragment(offset, () => {})
  return [...thing1, ...thing2, ...thing3, ...thing4]
  // MODIFY THE CODE HERE ------
}

getSentence(0, (sentence) => console.log(sentence))
