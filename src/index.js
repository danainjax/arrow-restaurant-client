//any global variables
//any initialization of the application
const baseURL= "http://localhost:3000/api/v1"
const pizzaService = new PizzaService()
const orderService = new OrderService()
const order_container = document.getElementById('order-container')
const pizzamenu = document.getElementById('pizza-menu')



const bttn = document.getElementById('menu-bttn');
bttn.addEventListener('click', () => {
    pizzaService.fetchAndLoadPizzas()
    orderService.fetchAndLoadOrders()
    opener = document.getElementById('opener')
    opener.remove()
    

})







    