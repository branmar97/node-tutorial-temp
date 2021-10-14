// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
sayHi(names.someonesName)
sayHi(names.anotherName)

const data = require('./6-alternative-flavor')
console.log(data)

require('./7-mind-grenade')
