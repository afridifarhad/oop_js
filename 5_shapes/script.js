class Shape {
  calculateArea() {
    console.log("Area calculation method in the base Shape class.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    const area = Math.PI * this.radius ** 2;
    console.log(`Area of the Circle with radius ${this.radius}: ${area.toFixed(2)}`);
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    const area = 0.5 * this.base * this.height;
    console.log(`Area of the Triangle with base ${this.base} and height ${this.height}: ${area}`);
  }
}

const myCircle = new Circle(5);

myCircle.calculateArea();

const myTriangle = new Triangle(8, 10);

myTriangle.calculateArea();
