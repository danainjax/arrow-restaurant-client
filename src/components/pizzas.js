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
        let pizzaCards = this.pizzas.map(pizza=>   
        `
            <div class="col mb-6">
                <div class="card">
                    <img src=${pizza.image_url} class="card-img-top" alt="pizza menu item">
                    <div class="card-body">
                        <h5 data-id="${pizza.name}" class="card-title">${pizza.name}</h5>
                        <p class="card-text">${pizza.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${pizza.price}</small>
                        
                        <button type="button" id="order" data-id="${pizza.id}" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Order
                        </button>
                    </div>
                 </div>   
            </div>
        </div>`).join('')
        
        pizzaMenu.innerHTML = pizzaCards
        console.log(pizzaCards)
        // pizzaMenu.innerHTML = this.pizzas.map(pizza=> `<li>${pizza.name}, ${pizza.description}, ${pizza.price}</li>`).join('')
        console.log('my pizzas are', this.pizzas)

        const orderBttns = document.querySelectorAll('#order')
       
        orderBttns.forEach(btn => btn.addEventListener('click', Order.buttonHandler))
        orderBttns.forEach(btn =>console.log(btn.getAttribute('data-id')))
       
        console.log('here are the buttons', orderBttns)
        // orderBttns.addEventListener('click', Order.buttonHandler)
        

        
    }

    
}
