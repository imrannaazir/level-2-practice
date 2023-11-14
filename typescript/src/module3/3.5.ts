{
  // access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    public addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    public getBalance() {
      console.log(this.balance);
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance = this.balance + 2;
    }
  }

  const account1 = new BankAccount(1, "Mr. X", 20);
  account1.addDeposit(20);
  account1.getBalance(); // 40

  //
}
