class Vehicle {
  constructor(make, model, year){
    this.make = make
    this.model = model
    this.year = year
  }
  vehicle_details(){
    console.log(`Make:${this.make} Model:${this.model} Year:${this.year}`)
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors){
    super(make, model, year)
    this.doors = doors

  }
  vehicle_details(){
    console.log(`Make:${this.make} Model:${this.model} Year:${this.year} Doors:${this.doors}`)
  }
}
let car = new Car ("Japan", "Honda", 2024, 4)

car.vehicle_details();
