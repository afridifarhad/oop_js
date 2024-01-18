class Animals {
  constructor(species, sound){
    this.species = species
    this.sound = sound
  }
  makeAnimalSound(){
       console.log(`Sound: ${this.sound}`)
  }
}

class Dog extends Animals{
  constructor(species, sound, color){
    super(species, sound)
    this.color = color
  }
  makeAnimalSound(){
    super.makeAnimalSound();
    console.log(`Color: ${this.color}`)
  }
}

let animal = new Dog("Dog", "ghap ghap", "black")

animal.makeAnimalSound();

console.log(animal)