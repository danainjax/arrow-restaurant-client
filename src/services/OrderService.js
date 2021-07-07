class OrderService {
  constructor() {
    this.endpoint = `${baseURL}/orders`
  }

  createOrder(e) {
    const orderObj= {
      //console log and check the values here, they are not getting captured correctly
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comments: e.target.comments.value,
      pizza_ids: Order.cart.map(cart=> parseInt(cart)),
      sub_total: this.sub_total,
      tax: this.tax,
      total: this.total,
    }
    return orderObj
    console.log(orderObj)
  }

  postOrder(orderObj) {
    console.log(orderObj)
    return fetch("http://localhost:3000/api/v1/orders", {
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

  getOrders() {
    return fetch(this.endpoint).then((res) => (res.json()))
    .then(orders => { 
      console.log(orders)
      //returns an Array of orders from the database
      })
  }
  

}
  
   
  
