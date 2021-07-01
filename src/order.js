class Order {
  // static orderForm = document.getElementById('order-form-container')
  static pizza_ids = [];
  constructor(order) {
    this.name = order.name;
    this.email = order.email;
    this.phone = order.phone;
    this.pizza_ids = order.pizza_ids;
    // this.sub_total = function () {
    //     grab the pizza_ids and from that grab the pizza object and get it's price. add the prices together to get the subtotal}
    // this.tax = sub_total * tax percentage for CT
    // this.total = sub_total + tax
  }

  render() {
    console.log(this.email);
  }

  static buttonHandler(event) {
    let addPizza = document.createElement("div");
    let pizza_id = event.target.dataset.id;
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
      </div>`;

    document.body.append(addPizza);

    const addToOrderButton = document.getElementById("create");

    addToOrderButton.addEventListener("submit", handleAdd());

    function handleAdd(event) {
      const cardContainer = document.getElementById("card-container");
      let card = document.createElement("card");
      Order.pizza_ids.push(pizza_id);
      card.innerHTML += `<h1>${pizza_id}</h1>`;
      addToOrderButton.remove();
      cardContainer.appendChild(card);
    }
  }
}
