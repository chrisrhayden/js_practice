


const fuck = (aFunction) => {
  const var1 = 3
  const var2 = 'shit'
  aFunction({
    multiThing: var2.repeat(var1),
    log: () => {
      let logMsg = this.multiThing
      console.log(logMsg)
    }
  })
}


fuck((objk) => {
  console.log(objk)
  objk.multiThing
  objk.log()
})
