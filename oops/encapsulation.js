class BankAccount {
    #balance = 0; //(encapsulated)

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ₹${amount}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const account = new BankAccount();
account.deposit(1000);
console.log("Balance:", account.getBalance());  //1000
console.log(account.balance); //  Error