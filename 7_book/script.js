class Book {
  constructor(title, author, publicationYear){
    this.title = title
    this.author = author
    this.publicationYear = publicationYear
  }
  display(){
    console.log(`Title: ${this.title}`)
    console.log(`Author: ${this.author}`)
    console.log(`Publication Year: ${this.publicationYear}`)
  }
}
class Ebook extends Book{
  constructor(title, author, publicationYear, price){
    super(title, author, publicationYear,)
    this.price = price
  }
  display(){
    super.display();
    console.log(`Price: ${this.price}`)
  }
}

let book = new Ebook("JavaScript", "Afnan Khan", 2024, 100)

book.display();

console.log(book)