function fuck (aFunction) {
  const var1 = 3
  const var2 = 'shit'
  aFunction({
    multiThing: var2.repeat(var1),
    log: (val) => console.log(val)
  })
}

const myCallBack = (objk) => {
  console.log(objk)
  let threeshit = objk.multiThing
  objk.log(threeshit)
}

fuck(myCallBack)
