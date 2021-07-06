class OrderService {
  constructor() {
    this.endpoint = `${baseURL}/orders`
  }

  createOrder() {
    const orderObj= {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comments: e.target.comments.value,
      pizza_ids: Order.all.map(order=> parseInt(order)),
      sub_total: this.sub_total,
      tax: this.tax,
      total: this.total,
  }
    fetch("http://localhost:3000/api/v1/orders", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderObj),
    })
    .then(resp=> console.log(resp.json()))
    .then(data => {
      console.log('You sent the order info to the backend, you pizza maker, you!', data)
    })
    .catch((error)=> {
      console.log('Error', error)
    })
  }
  



} 
