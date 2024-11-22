// Task 1: Create a constructor function for the Account object with properties for 
// accountNumber, balance, and owner.
function Account (accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}
// Task 2: Implement methods within the Account object to deposit and withdraw funds.
Account.prototype.deposit = function(amount){
    if (amount>0) { // Can't deposit a negative amount
        this.balance += amount;
    }
}
Account.prototype.withdraw = function(amount){
    if (amount>0) { // Can't withdraw a negative amount
        this.balance += amount;
    }}
// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
Account.prototype.calculateCompoundInterest = function(interestRate){
    this.balance += this.balance*(interestRate/100);
}
// Method to Display Account
Account.prototype.displayAccount = function() {
    console.log(`Balance: $${this.balance.toFixed(2)}, Owner: ${this.owner}`);
}

console.log('Opening an account with $1,500 for Amy:');
let account1 = new Account(1, 1500, 'Amy');
account1.displayAccount();
console.log('Withdrawing $300.50: ');
account1.withdraw(300.50);
account1.displayAccount();
console.log('Depositing $1,000.00: ');
account1.deposit(1000);
account1.displayAccount();
console.log('Calculating compound interest with a 7% interest rate: ');
account1.calculateCompoundInterest(7);
account1.displayAccount();