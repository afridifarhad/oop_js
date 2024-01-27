class Employee {
  constructor(firstName, lastName, numberOFYear){
    this.firstName = firstName
    this.lastName = lastName
    this.numberOFYear = numberOFYear

  }
}
// let e1 = new Employee ("ALi", "Khan", 2)
// let e2 = new Employee("Jan", "Nawaz", 3)
// let e3 = new Employee("Rafi", "ullah", 4)

 
// let arr = []

// arr.push(e1, e2, e3)

// console.log(arr)


Employee.prototype.show_emp = function()  {
document.write(`Employee Name: ${this.firstName}  <br>
 Employee Exp: ${this.numberOFYear} <br>
 =============================================
 <br>
 `)   
  
}

emp1 = new Employee("ali", "hassan", 3) 
emp2 = new Employee("Faisal", "jan", 12) 
emp3 = new Employee("Nasir", "Khan", 15) 
emp4 = new Employee("yasir", "ali", 8) 
emp5 = new Employee("Soail", "hassan", 6) 

employee = []

employee.push(emp1, emp2, emp3, emp4, emp5)


for(let a=0; a<employee.length; a++){

if(employee[a].numberOFYear >= 10){
  (employee[a].show_emp())
}
  
}



