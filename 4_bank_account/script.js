class BankAccount {
  constructor(accountNumber, balance){
    this.accountNumber = accountNumber
    this.balance = balance
  }
  deposit(){
    console.log("Here to deposite your Money")
  }
  withdraw(){
    console.log("Here to withdraw your money")
  }
}
let bank = new BankAccount(20892691683, "Rs -/50000")
let bank2 = new BankAccount(2024304034, "Rs -/10000")


bank.deposit();
bank.withdraw();

console.log(bank)
console.log(bank2)