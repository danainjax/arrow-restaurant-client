class OrderService {
constructor(order_id) {
    //take the order id in the params and interpolate it into the base_url
    this.baseUrl = `http://localhost:3000/api/v1/orders/${order_id}`;
  }

  getOrder() {
    return fetch(this.baseUrl)
      .then((res) => res.json())
    
  }
}