class Order {
  static all = [];
  static cart = [];
  constructor(order) {
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.pizza_ids = [];
    this.pizzas = order.pizzas;
    this.sub_total = this.addSubTotal();
    this.tax = this.computeTax();
    this.total = this.totalPrice();
    this.comments = order.comments;
    Order.all.push(this)
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

  orderedPizzas() {
    //Show ordered pizzas that were just created
    this.pizzas.forEach(order=> console.log(order.name, order.sub_total)); 
  } 

  // render() {
    
  // }

   
    //write the code to create an element to display the order and add to the DOM
cartModal() {
  let cartModalHtml = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      </div>`
      return cartModalHtml
}

 static orderButtonEvents() {
  const orderBttns = document.querySelectorAll("#order");

  orderBttns.forEach((btn) =>
    btn.addEventListener("click", this.handleOrderClick)
  );
}

static handleOrderClick() {
  Order.createCart
//determine if cart has been created or not- conditional, if cart not found run create cart and add pizza to cart
}

 static createCart() {
    let cart = document.createElement('div');
    cart.id = "cart";
    cart.innerHTML = this.cartModal();
    document.body.append(cart);
 }

 addPizzaToCart(event) {
  const pizza_id = event.target.dataset.id;
  let current_pizza = (Pizza.all.find(pizza=> pizza.id == pizza_id))
  const div_card = event.target.parentElement.parentElement
  const cardContainer = document.getElementById("card-container");
  let card = document.createElement("card");
  card.innerHTML += `<h1>${current_pizza.name}-${current_pizza.price}</h1>`;
  cardContainer.appendChild(card);
  Order.cart.push(pizza_id);
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
    
    
  
  //create a new order object with the name, email, phone, and contents of pizza_ids array then you can send the post request to the database- call OrderService.something here...
  pizzaOrderForm.remove()
 
  const orderService = new OrderService();
 
  let p = document.createElement('p')
  orderService;
  console.log(orderObj)
  
  p.innerText = `Order received ${orderObj.name}, ${orderObj.email}, ${orderObj.phone}, ${orderObj.comments}`
  
  console.log(p)
  document.body.append(p)
    })
  }

  // render() {
  //   const orderContainer = document.getElementById("order-container");
  //   let orderCard = 
  //         `
  //           <div class="col mb-6">
  //               <div class="card">
                    
  //                   <div class="card-body">
  //                       <h5 data-id="${this.name}" class="card-title">${this.email}</h5>
  //                       <p class="card-text">${this.phone}</p>
  //                   </div>
  //                   <div class="card-footer">
  //                       <small class="text-muted">${this.pizzas}</small>
                        
                       
  //                   </div>
  //                </div>   
  //           </div>
  //       </div>`
      

  //   orderContainer.innerHTML += orderCard;
  // }
}