const title = document.getElementById('title');
title.addEventListener('click', () => {
    sample = document.createElement('p')
    sample.innerText = "A Saugatuck staple for over 65 years, the Arrow Restaurant serves ..."
    title.append(sample)


})

fetch("http://localhost:3000/customers")
    .then(response => response.json())
    .then(customers => {
        console.log(customers)
       
        customersArray = customers
    })