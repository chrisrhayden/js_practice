

const front = (word) => {
  let three = word.substring(0, 3)
  console.log(three.repeat(3))
}


let test_list = ['JavJavJav', 'ChoChoCho', 'abcabcabc']

for (let test of test_list) {
  front(test)
}
