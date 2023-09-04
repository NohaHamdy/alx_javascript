#!/usr/bin/node

require('100-main.js')
change = function (myVar){
  myVar = 333
}
module.exports = { change };