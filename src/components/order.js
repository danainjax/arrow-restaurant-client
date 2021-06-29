class Order {
    constructor() {
        this.order = []
        this.service = new OrderService()
        // this.bindEventListeners()
        this.fetchAndLoadOrder()
    }

}