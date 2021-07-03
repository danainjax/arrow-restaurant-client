class Order {
  static all = [];
  constructor(order) {
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.pizza_ids = order.pizza_ids;
    this.pizzas = order.pizzas;
    this.order_items = [];
    this.sub_total = this.addSubTotal();
    this.tax = this.computeTax();
    this.total = this.totalPrice();
  }

  addSubTotal() {
    let prices = this.pizzas.map((pizza) => pizza.price); 
    if (prices.length === 0) {
      return "0.00";
    } else {
      let sub = prices.reduce((total, price) => total + price);
      return sub.toFixed(2);
    }
  };

  computeTax() {
    return (this.sub_total * 0.07).toFixed(2);
  };

  totalPrice() {
    let prices = this.pizzas.map((pizza) => pizza.price);
    if (prices.length === 0) {
      return 0.0;
    } else {
      let sub = prices.reduce((total, price) => total + price);
      let withTax = this.sub_total * 0.07;
      return (sub + withTax).toFixed(2);
    }
  };

  render() {
    console.log(this);
    //write the code to create an element to display the order and add to the DOM
  }

  static buttonHandler(event) {
    let addPizza = document.createElement("div");
    let pizza_id = event.target.dataset.id;
    //now I have the pizza_id, but how to get the Pizza it refers to?
    addPizza.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            
            <button type="button" input type="submit" id="create" class="btn btn-primary">Add to Order</button> 
            </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Select another pizza to order</button>
              
            </div>
          </div>
        </div>
      </div>`;

    document.body.append(addPizza);
    
    const addToOrderButton = document.getElementById("create");

    addToOrderButton.addEventListener("submit", handleAdd());

     function handleAdd(event) {
      const cardContainer = document.getElementById("card-container");
      let card = document.createElement("card");
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
            <textarea></textarea>
            <p></p>
            <input type="submit" value="Submit" href="#">
          </form>
        </center>
      </div>
  </div>`;
      pizzaMenu.append(orderForm);
      console.log(order_container);
      console.log('pizza_id', pizza_id)
      Order.all.push(pizza_id);
      card.innerHTML += `<h1>${pizza_id}</h1>`;
      addToOrderButton.remove();
      cardContainer.appendChild(card);
      // pizzamenu.remove();
    }

   const pizzaOrderForm = document.querySelector("#create-order");
   console.log(pizzaOrderForm)
   pizzaOrderForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    let name = e.target.name.value
    let email = e.target.email.value
    let phone = e.target.phone.value

    console.log(name, email, phone)
    // pizzaOrderForm.remove()
    
   })

  }

  
}




