export default class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Method
  get calcArea() {
    return this.height * this.width;
  }
  }