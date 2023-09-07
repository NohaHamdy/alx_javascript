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
  };

  rotate () {
    let temp = 0;
    temp = this.width;
    this.width = this.height;
    this.height = temp;
  };

  double () {
    this.width *= 2;
    this.height *= 2;
  };
}
module.exports = Rectangle;