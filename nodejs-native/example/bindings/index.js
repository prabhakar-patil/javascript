const myAddon = require('bindings')('addon')
console.log(myAddon.whoami())
console.log(myAddon.increment(10))
