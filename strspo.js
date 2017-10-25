/* stringSplosion('Code') → 'CCoCodCode'
 * stringSplosion('abc') → 'aababc'
 * stringSplosion('ab') → 'aab' */

const losion = (test, log) => {
  let strList = []
  for (let i = 1; i <= test.length; i++) {
    let strSplo = test.slice(0, i)
    strList.push(strSplo)
  }

  log(strList.join(''))
}

const testList = ['Code', 'abc', 'ab']

for (let test of testList) {
  losion(test, (result) => console.log(result))
}
