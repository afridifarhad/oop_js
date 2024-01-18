class Bank {
  constructor(bankName, branches) {
    this.bankName = bankName
    this.branches = branches
  }
  addBranch(branch) {
    this.branches.push(branch)

  }
  removeBranch(branch) {
    this.branches.splice(this.branches.indexOf(branch), 1)

  }
}
const bank = new Bank("HBL", ["Peshawar", "Lahore", "Karachi", "Multan", "Qutta"])

bank.addBranch("Nowshera")
bank.addBranch()
bank.removeBranch("Lahore")
bank.removeBranch()
console.log(bank);