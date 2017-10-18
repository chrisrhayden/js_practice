const getSentencFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  // my code
  let first = getSentencFragment()
  let second = getSentencFragment(first.nextPage)
  return [...first.data, ...second.data]
}

console.log(getSentence([], 0).join(''))
