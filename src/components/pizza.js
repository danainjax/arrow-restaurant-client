class Pizza {

    static pizzas = []
    constructor(pizza) {
        this.id = pizza.id
        this.name = pizza.name
        this.description = pizza.description
        this.image_url = pizza.image_url
        this.price = pizza.price
        this.quantity = 0
        Pizza.pizzas.push(pizza)
    }
    
}