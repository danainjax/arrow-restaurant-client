class PizzaService {
  constructor() {
    this.endpoint = `${baseURL}/pizzas`;
  }

  fetchAndLoadPizzas() {
    this.getPizzas().then((pizzas) => {
      pizzas.forEach((pizza) => {
        let p = new Pizza(pizza);
        p.appendToDom();
      });
    });
  }

  getPizzas() {
    return fetch(this.endpoint).then((res) => res.json());
  }
}
