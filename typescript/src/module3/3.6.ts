{
  // access modifier
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // getter
    public get balance() {
      return this._balance;
    }

    //setter
    public set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
  }

  //create instance
  const myAcc = new BankAccount(1, "Mr. X", 20);

  //use getter
  const balance = myAcc.balance;
  console.log(balance); //20

  //use setter
  myAcc.deposit = 22;

  const newBalance = myAcc.balance;
  console.log(newBalance); // 42

  //
}
