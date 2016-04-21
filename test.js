var getJoke = require('./index')

var joke = getJoke()

if (typeof joke[0] === 'string') {
  console.log('Joke is typeof "string"')
  process.exit(0)
}

console.log('Joke is NOT typeof "string"')
process.exit(1)
