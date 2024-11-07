{
	//3-5: Access modifiers
	class BankAccount {
		id: number;
		name:string;
		private _balance:number;
		constructor(id:number,name:string, balance:number){
			this._balance = balance;
			this.id = id;
			this.name = name
		}
		addDeposit(amount:number) {
			this._balance = this._balance + amount
		}
		getBalance(){
			return this._balance
		}
	}	

	const goribManusherAccount = new BankAccount(4, 'rakib', 564)
	goribManusherAccount.addDeposit(52)
	const myBalance = goribManusherAccount.getBalance()
	console.log(myBalance)


















	//
}