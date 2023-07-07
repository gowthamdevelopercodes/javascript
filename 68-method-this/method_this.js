let customer = {
  id: "39502882",
  name: "Annette Shanahan",
  phone: "(307) 196-7448",
  address: {
    street: "8029 Fae Knoll",
    city: "Crooksfurt",
    state: "Michigan",
  },
  price: 2000,
  printPrice: function () {
    console.log(`hi this is from printprice`);
  },
  log: function (data) {
    console.log(data);
  },
  changePrice: function (newPrice) {
    //price = newPrice;
    // console.log(price);
    // console.log(this);
    this.price = newPrice;
  },
};

customer.changePrice(4000);
console.log(
  `my id ${customer.id} and name is ${customer.name} and its price ${customer.price}`
);

customer.price = 3000;
// customer.changePrice(4000);
console.log(customer);
