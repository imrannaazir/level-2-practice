{
  //method
  const poorPeople = {
    name: "Emon",
    balance: 0,
    addBalance(balance: number) {
      return `My balance is ${balance + this.balance}`;
    },
  };

  console.log(poorPeople.addBalance(500));
  
}
