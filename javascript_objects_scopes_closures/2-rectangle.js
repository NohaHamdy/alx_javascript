#!/usr/bin/node

class Rectangle {
    constructor (w, h) {
      if (typeof h === 'number' && h > 0 && typeof w === 'number' && w > 0) {
        this.height = h;
        this.width = w;
      }
    }
  }
module.exports = Rectangle;