const josephus = (items, k) => {
  let returnArry = []
  const itemL = items.length

  let c = 1
  let i = 0
  while (true) {
    if (returnArry.length === itemL) {
      break
    }

    console.log(c, k)
    if (c === k) {
      returnArry.push(items[i])
      c = 1
      i++
      console.log('add tpo arry', returnArry)
    } else {
      c++
      i++
    }

    if (i === items.length) {
      i = 0
    }
  }

  return returnArry
}

/*
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
*/

const test = [1, 2, 3, 4, 5, 6, 7]
const res = josephus(test, 3)

console.log(test, 'result >>>', res)
/*
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
// [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
console.log(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4))
// ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3)) // [3, 6, 2, 7, 5, 1, 4]
console.log(josephus([], 3)) // []
*/
