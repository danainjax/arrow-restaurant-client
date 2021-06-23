BUILD NOTES
-[ ] Render all the Pizzas (menuu) to the DOM
-[ ] Make sure the images come through on the Pizzas
-[ ] Spend 1 - 2 hours on basic design of the page
-[ ] Build out your classes in JS, review this

# MVP

1. - [ ] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

2. - [ ] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

3. - [X] The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments. (Pizza has_many :pizza_orders & has_many :orders, through: :pizza_orders, Order has_many :pizza_orders & has_many :pizzas, through: pizza_orders) 

4. - [ ] The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

# BEST PRACTICES
#### JavaScript
 - [ ] Use classes and functions to organize your code into reusable pieces.
 - [ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
 - [ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
#### Rails
 - [ ] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
 - [ ] Well-named variables and methods
 - [ ] Short, single-purpose methods

 
# LEARNING GOALS
#### These are the skills and knowledge that you should aim to demonstrate through the project review. 

- [ ] Explain how Rails routes a request to a controller and method based on the URL and HTTP verb
- [ ] Use render json: to render serialized JSON
- [ ] Select, Create, and Modify DOM nodes
- [ ] Attach listeners to DOM nodes to respond to user interaction
- [ ] Use preventDefault to control form submit behavior
- [ ] Use fetch with 'GET', 'POST', 'PATCH' & 'DELETE' HTTP methods
- [ ] Create a JavaScript object with ES6 class syntax
- [ ] Instantiate JavaScript objects and call methods on them.
