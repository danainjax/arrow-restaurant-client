class Order {
    // static orderForm = document.getElementById('order-form-container')
    static pizza_ids = []
    constructor(JSON) {
        this.name= JSON.name
        this.email = JSON.email
        this.phone = JSON.phone
        this.pizza_ids = []
        // this.sub_total = function () {
        //     grab the pizza_ids and from that grab the pizza object and get it's price. add the prices together to get the subtotal}
        // this.tax = sub_total * tax percentage for CT 
        // this.total = sub_total + tax
        
    }
    
    // constructor() {
    //     this.order = []
    //     this.service = new OrderService()
    //     // this.bindEventListeners()
    //     this.fetchAndLoadOrder()
    // }

    // fetchAndLoadOrder() {
    //     this.service
    //     .getOrder()
    //     .then(order => {
    //         order.forEach(pizza=> this.pizzas.push(new Pizza(pizza)))
    //     })
    //     .then(() => {
    //         this.render()
    //     })
    // }
    
   
    static buttonHandler(event) {
        console.log('this is the buttonHandler function')
        let addPizza = document.createElement('div')
       
        // orderForm.attributes(id= "order-form")
        
        //  console.log(event.target.dataset.id )
         let pizza_id = event.target.dataset.id
         
         //now I have the pizza_id, but how to get the Pizza it refers to?
         
         
         //now write the code to add the pizza_id to the pizza_ids array for the order, you've got this
        addPizza.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Pizza</h5>
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
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>`
  
      console.log(pizza_id)
      
                
         console.log(pizza_id)
        
        document.body.append(addPizza)

        const addToOrderButton = document.getElementById("create")
        console.log(addToOrderButton)

        addToOrderButton.addEventListener('submit', handleAdd())

         function handleAdd(event) {
            console.log('we hit the handleAdd event') 
            const cardContainer = document.getElementById('card-container')
            console.log(cardContainer)
            let card = document.createElement('card')
            console.log(pizza_id)
            console.log(document.getElementById('h5'))
            Order.pizza_ids.push(pizza_id)
            console.log(Order.pizza_ids)
            card.innerHTML += `<h1>${pizza_id}</h1>`
            addToOrderButton.innerHTML = " "
            addToOrderButton.outerHTML = " "
            cardContainer.appendChild(card)
            // let pizza_name = event.target.dataset.id
            // console.log(event.target)
            
            

        }
        
    

//     fetch(`http://localhost:3000/orders/${order_id}`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// });

    

}}