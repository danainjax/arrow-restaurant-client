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
        let pizzasCard = this.pizzas.map(pizza=> `<div class="row no-gutters">
        <div class="card col-sm-6 col-lg-3">
            <div class="card-img-top"><img src=${pizza.image_url} /></div>
            <div class="card-body">
                <p class="card-text">${pizza.name} - ${pizza.description} </div>
            <div class="card-footer">${pizza.price}</div>
        </div>`).join('')
        pizzaMenu.innerHTML = pizzasCard
        // pizzaMenu.innerHTML = this.pizzas.map(pizza=> `<li>${pizza.name}, ${pizza.description}, ${pizza.price}</li>`).join('')
        console.log('my pizzas are', this.pizzas)
    }
}
