class OrderService {
  constructor() {
    this.endpoint = `${baseURL}/orders`
  }

  fetchAndLoadOrders() {
    this.getOrders().then((orders) => {
      orders.forEach((order) => {
        let o = new Order(order);
        o.render();
      });
    });
  }

  getOrders() {
    return fetch(this.endpoint).then((res) => res.json());
  }
 

} 
