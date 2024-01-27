class BankAccount{
  constructor(accountNumber, acountHolderName, balance){
    this.accountNumber = accountNumber
    this.acountHolderName = acountHolderName
    this.balance = balance
  } 
  deposit(amount){
    this.balance += amount
    console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`)
    
  }
  withdraw(amount){
    if(amount > this.balance){
     
      console.log("Insuficient balance")
          }else{
      this.balance -= amount
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance:${this.balance}`)
      
          } 
  }
  transfer(amount, recipientAccount){
    if(amount > this.balance){
      console.log("Insuficient balance")
      
    }else{
      this.balance -= amount
      recipientAccount.balance += amount
      console.log(`Transferred ${amount} from account ${this.accountNumber} to account ${recipientAccount.accountNumber}. New balance: ${this.balance}`)
      
    } 
  }  
}
const account1 = new BankAccount(1, "Ali Khan", 1000)
const account2 = new BankAccount(2, "Ahmad Khan", 5000)
account1.deposit(500)
account1.withdraw(200)
account1.transfer(300, account2)

console.log(account1)