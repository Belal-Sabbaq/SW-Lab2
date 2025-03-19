/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/

class Point {
  //this constructor is used to construct the pt class
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(startingPoint, width, height) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width; // w is the width
    this.height = height; // h is the height
  }

  // ***************
  // METHODS
  // ***************

  // ***************
  // Getters
  // ***************
  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  getHeight() {
    return this.height;
  }
  getWidth() {
    return this.width;
  }

  
  // ***************
  // Update Methods
  // ***************
  update({ startingPoint, width, height }) {
    if (!height || height <= 0 || !width || width <= 0) {
      throw Error("invalid Width and Height"); // throws an error in cas of width or height < 0
    }
    this.startingPoint = startingPoint;
    this.width = width;
    this.height = height;
  }

  updateHeight(height) {
    if (height && height > 0) {
      this.height = height;
    }else{
      throw new Error("Invalid height. It must be greater than zero.")
    }
  }


  

  
  //function that print the endpoints
  printEndPoints() {
    const topRight = this.startingPoint.x + this.width;
    const bottomLeft = this.startingPoint.y + this.height;
    console.log("End Point X-Axis (Top Right): " + topRight);
    console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
  }

  
}

function createRectangle(x, y, height, width) {
  const mainPoint = new Point(x, y);
  return new Rectangle(mainPoint, width, height);
}

function createSquare(x, y, size) {
  
  if (!size || size <= 0) {
    throw new Error("Invalid square size. It must be greater than 0")
  }
  const square = createRectangle(x, y, size, size)
  console.log("square Area ", square.getArea());
  console.log("square Perimeter ", square.getPerimeter());
  return square;
}

const myRectangle = createRectangle(2,3,4,5)
const mySquare = createSquare(1,1,4)

console.log("Square Perimeter: ", mySquare.getPerimeter());
mySquare.printEndPoints();
myRectangle.updateHeight(3);
myRectangle.printEndPoints();