class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  annualSalary() {
    return this.salary * 12

  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary)
    this.department = department
  }
}
const employee1 = new Employee("fahd", 5000)
const employee2 = new Manager("KHAN", 2000, "computer science")
console.log(employee1.annualSalary());
console.log(employee2.annualSalary());
