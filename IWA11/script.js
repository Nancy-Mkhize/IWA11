// script.js

class Order {
    constructor(orderKey) {
      this.root = document.querySelector(`[data-key="${orderKey}"]`);
      this.biscuitsElement = this.root.querySelector('.biscuits .count');
      this.donutsElement = this.root.querySelector('.donuts .count');
      this.pancakesElement = this.root.querySelector('.pancakes .count');
      this.statusElement = this.root.querySelector('.status dd');
    }
  
    updateValues() {
      this.biscuitsElement.textContent = this.root.dataset.biscuits;
      this.donutsElement.textContent = this.root.dataset.donuts;
      this.pancakesElement.textContent = this.root.dataset.pancakes;
      this.statusElement.textContent = this.root.dataset.delivered === "true" ? "Delivered" : "Pending";
    }
  }
  
  // Create instances of the Order class for each order
  const order1 = new Order("order1");
  const order2 = new Order("order2");
  const order3 = new Order("order3");
  
  // Update the values for each order
  order1.updateValues();
  order2.updateValues();
  order3.updateValues();
  