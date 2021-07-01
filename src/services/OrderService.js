class OrderService {
  constructor(order_id) {
    //take the order id in the params and interpolate it into the base_url
    this.baseUrl = `http://localhost:3000/api/v1/orders/${order_id}`;
  }

  getOrder() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

   submitOrder (name, email, phone, pizza_ids, quantity, special_instructions) {
    return fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email,
        phone,
        pizza_ids: [],
        quantity,
        special_instructions
        })
    })

.then( function (response) {
    return response.json()
    
})
.then(function(object) {
    document.body.innerHTML = object["id"]
    console.log(object["id"])
  })
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
}
}
