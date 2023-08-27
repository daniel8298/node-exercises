///////////////////////////////////////////////////////  1 - 2
// class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   info() {
//     return "This is a Rectangle";
//   }
// }

// class Square extends Rectangle {
//   LengthSide: number;

//   constructor(LengthSide: number) {
//     super(LengthSide, LengthSide);
//     this.LengthSide = LengthSide;
//   }
// }

// const AreaRectangle = new Rectangle(5, 8);
// console.log(AreaRectangle.area());
// const square = new Square(8);
// console.log(square.area());

///////////////////////////////////////////////////////////   3

// class Shape {
//   info() {
//     return "This is a Shape";
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   info() {
//     return "This is a Rectangle";
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(height: number, width: number, color: string) {
//     super(height, width);
//     this.color = color;
//   }

//   info() {
//     return `The rectangle is ${this.color}`;
//   }
// }

// const rectangle = new ColoredRectangle(2, 3, "red");
// console.log(rectangle.info());

////////////////////////////////////////////////////////   4

// class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   scale(numberCoefficient: number) {
//     this.width = numberCoefficient * this.width;
//     this.height = numberCoefficient * this.height;
//     return this;
//   }

//   static combine(rectangle1: Rectangle, rectangle2: Rectangle) {
//     const newWidth = rectangle1.width + rectangle2.width;
//     const newHeight = rectangle1.height + rectangle2.height;
//     return new Rectangle(newWidth, newHeight);
//   }
// }

// const rectangle1 = new Rectangle(4, 5);
// const rectangle2 = new Rectangle(3, 6);
// rectangle1.scale(4);
// rectangle2.scale(2);
// const combineRec = Rectangle.combine(rectangle1, rectangle2);
// console.log(combineRec.area());

/////////////////////////////////////////////////////      5

class Shape {
  draw() {
    console.log("drawing a Shape");
  }
}

class Triangle extends Shape {
  draw() {
    console.log("drawing a Triangle");
  }
}
class Circle extends Shape {
  draw() {
    console.log("drawing a Circle");
  }
}
class Square extends Shape {
  draw() {
    console.log("drawing a Square");
  }
}

const renderShapes = (shapes: Shape[]) => {
  shapes.forEach((shape) => {
    shape.draw();
  });
};
const circle: Circle = new Circle();
const square: Square = new Square();
const triangle: Triangle = new Triangle();
const shapes: Shape[] = [circle, square, triangle];
renderShapes(shapes);
