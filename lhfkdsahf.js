const shuf = (f) => {
  f.sort(() => {
    const t = Math.random() - 0.5
    console.log(t)
  })
}

const h = [1, 2, 3, 4, 5]

shuf(h)
