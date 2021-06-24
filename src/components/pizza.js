class Pizza {
    constructor(pizzaJSON) {
        this.id = pizzaJSON.id
        this.name = pizzaJSON.name
        this.description = pizzaJSON.description
        this.image_url = pizzaJSON.image_url
        this.price = pizzaJSON.price
        this.quantity = pizzaJSON.quantity
    }
    
}