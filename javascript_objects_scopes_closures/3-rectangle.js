#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
      if (typeof h === 'number' && h > 0 && typeof w === 'number' && w > 0) {
        this.width = w;
        this.height = h;
      }
    }
  
    print () {
      for (let i = 0; i < this.height; i++) {
        let y = 0;
        let myVar = '';
        
        while (y < this.width) {
          myVar += 'X';
          y += 1;
        }
        console.log(myVar);
      }
    }
  }
module.exports = Rectangle;