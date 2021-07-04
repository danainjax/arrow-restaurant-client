class Order {
  static all = [];
  
  constructor(order) {
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.pizza_ids = order.pizza_ids
    this.pizzas = order.pizzas;
    this.sub_total = this.addSubTotal();
    this.tax = this.computeTax();
    this.total = this.totalPrice();
    this.comments = order.comments
  }

  addSubTotal() {
    let prices = this.pizzas.map((pizza) => pizza.price);
    if (prices.length === 0) {
      return "0.00";
    } else {
      let sub = prices.reduce((total, price) => total + price);
      return sub.toFixed(2);
    }
  }

  computeTax() {
    return (this.sub_total * 0.07).toFixed(2);
  }

  totalPrice() {
    let prices = this.pizzas.map((pizza) => pizza.price);
    if (prices.length === 0) {
      return 0.0;
    } else {
      let sub = prices.reduce((total, price) => total + price);
      let withTax = this.sub_total * 0.07;
      return (sub + withTax).toFixed(2);
    }
  }

  render() {
    console.log(this);
    //write the code to create an element to display the order and add to the DOM
  }

  static addPizzaToCart(event) {
    let cart = document.createElement('div');
    cart.id = "cart";
    cart.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">Pizza Cart</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div id="card-container">

                 </div>
            
            <button type="button" data-dismiss="modal" id="add-more-pizzas" class="btn btn-secondary">Add More Pizzas to Cart</button> 
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" id="ready-to-place-order" class="btn btn-primary" input type="submit" data-dismiss="modal">Ready to Place Order!</button>
              
            </div>
          </div>
        </div>
      </div>`;

    document.body.append(cart);

    const pizza_id = event.target.dataset.id;
    const cardContainer = document.getElementById("card-container");
    let card = document.createElement("card");
    card.innerHTML += `<h1>${pizza_id}</h1>`;
    cardContainer.appendChild(card);
    Order.all.push(pizza_id);
    const readyToPlaceOrder = document.getElementById("ready-to-place-order");
    readyToPlaceOrder.addEventListener('click', Order.renderOrderForm)
    
  }

   static renderOrderForm() {
    cart.innerHTML = " "
    pizzaMenu.remove()
    const orderForm = document.createElement("div");
    orderForm.innerHTML = `
        <div id="wrapper">
          <div id="inputs">
             <div>
              <center>
                <form id="create-order" name="input" action="#" method="post">
                <h1 class="order-form">Order</h1>
                Name: <input type="text" name="name" placeholder="Paul Hollywood"><br/>
                Email <input type="text" name="email" placeholder="BritishBaker.1@gmail.com"><br/>
                Phone:<input type="phone" name="phone" placeholder="904-555-2210">
              <br/>
                <p>
                </p>
                <h3> Pizzas added to order </h3>
                
                <p> Show the pizza ordered here </p>
               
                <p>Comments:</br></p>
                <input type="textarea" name="comments"></textarea>
                <p></p>
                <input type="submit" value="Submit" href="#">
              </form>
            </center>
          </div>
      </div>`;
    document.body.append(orderForm);
    
    const pizzaOrderForm = document.querySelector("#create-order");
 
    pizzaOrderForm.addEventListener('submit', (e)=> {
      e.preventDefault();
    
    const orderObj= {
      
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comments: e.target.comments.value,
      pizza_ids: Order.all.map(order=> parseInt(order)),
      sub_total: this.sub_total,
      tax: this.tax,
      total: this.total,
      comments: this.comments

  }
  console.log(Order.all)
  console.log(orderObj.pizza_ids)
  
  console.log(orderObj)
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
  console.log(orderObj)
  //create a new order object with the name, email, phone, and contents of pizza_ids array then you can send the post request to the database- call OrderService.something here...
  pizzaOrderForm.remove()
  // orderService
  // orderService.fetchAndLoadOrders()
  //show order received message

    })
  }
}