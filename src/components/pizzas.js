class Pizzas {
    constructor() {
        this.pizzas = []
        this.service = new PizzasService()
        // this.bindEventListeners()
        this.fetchAndLoadPizzas()
    }


    fetchAndLoadPizzas() {
        this.service
        .getPizzas()
        .then(pizzas => {
            pizzas.forEach(pizza=> this.pizzas.push(new Pizza(pizza)))
        })
        .then(() => {
            this.render()
        })
    }
    
    render() {
        const pizzaMenu = document.getElementById('pizza-menu')
        let pizzasCard = this.pizzas.map(pizza=>   
        `
            <div class="col mb-6">
                <div class="card">
                    <img src=${pizza.image_url} class="card-img-top" alt="pizza menu item">
                    <div class="card-body">
                        <h5 class="card-title">${pizza.name}</h5>
                        <p class="card-text">${pizza.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${pizza.price}</small>
                        <a id="order-bttn" class="btn btn-primary btn-lg" href="#" role="button" position="right">Order</a>
                    </div>
                 </div>   
            </div>
        </div>`).join('')
        
        pizzaMenu.innerHTML = pizzasCard
        console.log(pizzasCard)
        // pizzaMenu.innerHTML = this.pizzas.map(pizza=> `<li>${pizza.name}, ${pizza.description}, ${pizza.price}</li>`).join('')
        console.log('my pizzas are', this.pizzas)
    }
}
