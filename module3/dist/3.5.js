"use strict";
{
    //3-5: Access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this._balance = balance;
            this.id = id;
            this.name = name;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(4, 'rakib', 564);
    goribManusherAccount.addDeposit(52);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    //
}
