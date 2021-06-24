const ul = document.getElementById('menu')

const title = document.getElementById('title');
title.addEventListener('click', () => {
    sample = document.createElement('p')
    sample.innerText = "A Saugatuck staple for over 65 years, the Arrow Restaurant serves ..."
    title.append(sample)


})

    fetch("http://localhost:3000/api/v1/pizzas")
    .then(response => response.json())
    .then(pizzas => {
        pizzas.map((pizza) =>{
            li = document.createElement('li')
            li.innerText += `${pizza.name}, ${pizza.description}, ${pizza.price}`
            ul.append(li)
            img = document.createElement('img')
            console.log(img)
            img.setAtr
        //     img.innerHTML += `<img src= ${pizza.img_url}>`
        //     console.log(pizza.image_url)
        //     li.innerHTML += img
        })
        console.log(pizzas)
            
        })

    