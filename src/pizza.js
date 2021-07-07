class Pizza {
  static all = [];

  constructor(pizza) {
    this.id = pizza.id;
    this.name = pizza.name;
    this.description = pizza.description;
    this.image_url = pizza.image_url;
    this.price = pizza.price;
    this.quantity = pizza.quantity;
    Pizza.all.push(this);
  }

  pizzaCardHtml() {
    let pizzaCard = 
          `
            <div class="col mb-6">
                <div class="card">
                    <img src=${this.image_url} class="card-img-top" alt="pizza menu item">
                    <div class="card-body">
                        <h5 data-id="${this.name}" class="card-title">${this.name}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${this.price}</small>
                        
                        <button type="button" id="order" data-id="${this.id}" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Order
                        </button>
                    </div>
                 </div>   
            </div>
        </div>`
        return pizzaCard
  } 

  appendToDom() {
    const pizzaMenu = document.getElementById("pizza-menu");
    pizzaMenu.innerHTML += this.pizzaCardHtml()
    Order.orderButtonEvents();
    console.log('you appended to dom and called Order.orderButtonEvents')
  }

 
  
}


