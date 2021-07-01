
// Order.renderForm()


const bttn = document.getElementById('menu-bttn');
bttn.addEventListener('click', () => {
    const app = new App();
    opener = document.getElementById('opener')
    opener.innerHTML = " "
    opener.outerHTML = " "
    

})

function submitOrder (name, email, phone, pizza_ids, quantity, special_instructions) {
    return fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        email,
        phone,
        pizza_ids: [],
        quantity,
        special_instructions
        })
    })

.then( function (response) {
    return response.json()
    
})
.then(function(object) {
    document.body.innerHTML = object["id"]
    console.log(object["id"])
  })
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
}





    