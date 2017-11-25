/* Given an imaginary chess board of size m x n including only the Queen and the King
 * write a function that takes the positions (coordinates) of both the Queen and
 * the King as parameters and returns a boolean telling whether or not the
 * King is threatened by the Queen

const diagonal = (maxStop, gameObj) => {
  const kx = gameObj.kx
  const ky = gameObj.ky

  const qx = gameObj.qx
  const qy = gameObj.qy

  let c = 1
  let nc = -1

  while (true) {
    const plusQx = qx + c
    const minQx = qx + nc

    const plusQy = qy + c
    const minQy = qy + nc

    if (plusQx === kx && plusQy === ky) {
      return true
    } else if (plusQx === kx && minQy === ky) {
      return true
    }

    if (minQx === kx && minQy === ky) {
      return true
    } else if (minQx === kx && plusQy === ky) {
      return true
    }

    if (c === maxStop) {
      return false
    } else {
      c++
      nc--
    }
  }
}
*/

const column = (gameObj) => {
  const kx = gameObj.kx
  const ky = gameObj.ky

  const qx = gameObj.qx
  const qy = gameObj.qy

  if (kx === qx || ky === qy) return true
}

const diagonalV2 = (pqx, pqy, nqx, nqy, kx, ky) => {
  if (pqx === kx && pqy === ky) {
    console.log('positive and positive true')
    return true
  } else if (pqx === kx && nqy === ky) {
    console.log('positive and negative true')
    return true
  } else if (nqx === kx && nqy === ky) {
    console.log('negative and negative true')
    return true
  } else if (pqx > kx && pqy > ky) {
    console.log('false')
    return false
  } else {
    return diagonalV2(pqx + 1, pqy + 1, nqx - 1, nqy - 1, kx, ky)
  }
}

const threatens = (board, gameObj) => {
  /*
  const kx = 3
  const ky = 2
  const test3 = {name: 3, kx: 7, ky: 2, qx: 5, qy: 4}
  console.log('test 1')
  diagonalV2(5, 6, 5, 6, kx, ky)
  console.log('test 2')
  diagonalV2(5, 4, 5, 4, test3.kx, test3.ky)
  */
  const queenMsg = 'the queen is challenging the king'
  const kingMsg = 'nothing is chalinging the king'

  // const maxSide = Math.max(board.x, board.y)
  const cords = [gameObj.qx, gameObj.qy, gameObj.qx, gameObj.qy, gameObj.kx, gameObj.ky]

  let challenge = kingMsg

  if (column(gameObj)) {
    console.log('column is true')
    challenge = queenMsg
  } else if (diagonalV2(...cords)) {
    challenge = queenMsg
  }

  console.log(challenge)
}

/*
threatens(1, 1)
*/
const test = {name: 1, kx: 3, ky: 2, qx: 5, qy: 6}

const test2 = {name: 2, kx: 5, ky: 2, qx: 5, qy: 6}

const test3 = {name: 3, kx: 7, ky: 2, qx: 5, qy: 4}

const test4 = {name: 4, kx: 7, ky: 2, qx: 5, qy: 3}

const testList = [test, test2, test3, test4]

const gameBoard = {x: 8, y: 8}

for (let t of testList) {
  console.log(t.name, t)

  threatens(gameBoard, t)
  console.log()
}
