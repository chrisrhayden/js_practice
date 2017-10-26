const { exec } = require('child_process')

exec('ls', (error, stdout, stderr) => {
  if (error) console.log(error)
k if (stderr) console.log(stderr)
  console.log(stdout)
})
