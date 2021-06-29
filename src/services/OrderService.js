class OrderService {
constructor(order_id) {
    //take the order id in the params and interpolate it into the base_url
    this.baseUrl = `http://localhost:3000/api/v1/orders/${order_id}`;
  }

  getOrder() {
    return fetch(this.baseUrl)
      .then((res) => res.json())
    //   .then((pizzas) => {(console.log(pizzas))
        // pizzas.map((pizza) => {
        //   li = document.createElement("li");
        //   li.innerText += `${pizza.name}, ${pizza.description}, ${pizza.price}`;
        //   ul.append(li);
        //   img = document.createElement("img");
        //   console.log(img);
        //   img.setAtr;
        //   //     img.innerHTML += `<img src= ${pizza.img_url}>`
        //   //     console.log(pizza.image_url)
        //   //     li.innerHTML += img
    //     });
    //   });
  }
}