class Person {
  constructor(name, age, country){
    this.name = name 
    this.age = age 
    this.country = country
    }

    person_details(){
      console.log(`Name ${this.name} Age ${this.age} Country ${this.country}`)
    }
}
let person1 = new Person("Farhad", 22, "Pakistan")
let person2 = new Person("Ali", 20, "UK")

person1.person_details();
person2.person_details();