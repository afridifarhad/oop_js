class University{
  constructor(name, departments){
    this.name = name 
    this.departments = departments
    
  }
  addDepartment(department){
    this.departments.push(department)
    
  }
  removeDepartment(department){
    const index = this.departments.indexOf(department)
    if(index !== -1){
      this.departments.splice(index, 1)
      
    }else{
      console.log("Department not found")
      
    }
  }
  displayDepartments(){
    console.log("Departments of " + this.name + ":")
    for(const department of this.departments){
      console.log(department)
      
    }
    
  }
  
}
const university = new University("Islamia College University", ["Computer Science", "Statistical Science", "Mathematices", "Software Engineering"])
university.addDepartment("Electrical Engineering")
university.removeDepartment("Computer Science")
university.displayDepartments()

console.log(university)
