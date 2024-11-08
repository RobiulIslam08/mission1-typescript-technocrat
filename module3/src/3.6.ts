{
	//3-6: getter and setter
	class BankAccount {
		id: number;
		name:string;
		private _balance:number;
		constructor(id:number,name:string, balance:number){
			this._balance = balance;
			this.id = id;
			this.name = name
		}

		set deposit(amount:number) {
			 this._balance = this._balance + amount
		}
		// addDeposit(amount:number) {
		// 	this._balance = this._balance + amount
		// }


		// use get
		get balance(){
			return this._balance
		}
		// getBalance(){
		// 	return this._balance
		// }
	}	

	const goribManusherAccount = new BankAccount(4, 'rakib', 54)
	goribManusherAccount.deposit = 100
	const myBalance = goribManusherAccount.balance
	console.log(myBalance)


















	//
}