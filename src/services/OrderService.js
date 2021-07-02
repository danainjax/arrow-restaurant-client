class OrderService {
  constructor() {
    this.endpoint = `${baseURL}/orders`
  }

  fetchAndLoadOrders() {
    this.getOrders().then((orders) => {
      console.log(orders.data)
      orders.data.forEach((order)=> {
        let o = new Order(order.attributes)
        o.render()
      })
      // orders.forEach((order) => {
      //   let o = new Order(order);
      //   o.render();
      // });
    });
  }

  getOrders() {
    return fetch(this.endpoint).then((res) => res.json());
  }
 

} 
