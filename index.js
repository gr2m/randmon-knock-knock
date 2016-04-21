var getJoke = require('knock-knock-jokes')

module.exports = function () {
  return getJoke().split('\n')
}
