class Product {
  constructor(name, price, salesTax) {
    this.name = name;
    this.price = price;
    this.salesTax = salesTax;
  }

  displayProductPrice() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal() {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);
const product3 = new Product("Underwear", 100.0);

product3.displayProductPrice();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
