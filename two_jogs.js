const gcdRec = (a, b) => {
  if (!b) return a
  return gcdRec(b, a % b)
}

const nbrOfLaps = (bob, charles) => {
  const gcd = gcdRec(bob, charles)
  console.log('>>>', gcd)

  let nem = [charles / gcd, bob / gcd]
  return nem
}

console.log(nbrOfLaps(10, 20)) // returns [3, 5]
console.log(nbrOfLaps(5, 3)) // returns [3, 5]

console.log(nbrOfLaps(4, 6)) // returns [3, 2]

console.log(nbrOfLaps(13, 28)) // returns [ 28, 13 ]

console.log(nbrOfLaps(81, 3)) // returns [ 1, 27 ]

console.log(nbrOfLaps(51, 9)) // returns [ 3, 17 ]
