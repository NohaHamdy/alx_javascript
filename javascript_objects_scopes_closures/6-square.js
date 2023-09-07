#!/usr/bin/node

const PrevSquare = require('./5-square');

class Square extends PrevSquare {
  charPrint (c) {
    const myChar = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
    let y = 0;
      let myVar = '';
      
      while (y < this.width) {
        myVar += myChar;
        y = y+1;
      }
      console.log(myVar);
    }
  }
}
module.exports = Square;