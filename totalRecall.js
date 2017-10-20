const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  let data = getSentenceFragment(offset)
  if (data.nextPage != null) {
    sentence.push(...data.data)
    console.log('>>> ', sentence)
    /* return to exit recursion or
     * the whole code block will be run
     * despite a recursive call in middle of code */
    return getSentence(sentence, data.nextPage)
  }

  sentence.push(...data.data)
  console.log(sentence)
  return sentence
  // MODIFY CODE HERE ------------
}

console.log(getSentence([], 0).join(''))
