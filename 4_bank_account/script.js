class BankAccount {
  constructor(accountNumber, balance){
    this.accountNumber = accountNumber
    this.balance = balance
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into Account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid deposit amount.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from Account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount or insufficient funds.');
    }
  }
}

const account1 = new BankAccount('12345', 1000);
const account2 = new BankAccount('67890', 500);

account1.deposit(200);
account1.withdraw(50);

account2.deposit(300);
account2.withdraw(200);