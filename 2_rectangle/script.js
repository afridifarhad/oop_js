class Rectangle {
  constructor(width, height){
    this.width = width
    this.height = height
  }
  calculate_area(){
      // console.log(`width: ${this.width} height: ${this.height}`)
      return this.width * this.height;
  }
  calculate_perimeter(){
    // console.log("To calculate rectangle perimeter")
    return 2 * (this.width + this.height);

  }
}
let rect = new Rectangle(2, 5)
const area = rect.calculate_area();
const perimeter = rect.calculate_perimeter();

console.log(area)
console.log(perimeter)
