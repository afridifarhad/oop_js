class Product {
  constructor(id, name, price){
    this.id = id
    this.name = name 
    this.price = price
  }
  totalPrice(quantity){
    return this.price * quantity   
  }
}
class PersonalCareProduct extends Product{
  constructor(id, name, price, warrantyPeriod){
    super(id, name, price)
    this.warrantyPeriod = warrantyPeriod
    
  }
  totalPrice(quantity){
    return this.price * quantity + this.warrantyPeriod
    
  }
}
let product1 = new Product(1, "shampoo", 100)
let product2 = new PersonalCareProduct(2, "toothpaste", 50, 10)
console.log(product1.totalPrice(2))
console.log(product2.totalPrice(2))
