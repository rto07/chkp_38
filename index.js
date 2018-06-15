/*Following the examples above, create a new prototype called Product and three instances of it. Each instance should be a separate product (for example, a shirt, a jacket, and a scarf).*/

function Product(brand, name) {
	this.brand = brand;
  	this.name = name || "Default Product";
}; 

//what is the purpose of placing "|| 'Default Product'" in the code above?

//methods
Product.prototype.nProduct = function() {
	console.log("Checkout my new " + this.name + ".");
};

let shirt = new Product ("target", "shirt");
let jacket = new Product ("target", "jacket");
let scarf = new Product ("target", "scarf");
shirt.nProduct(); //"Checkout my new shirt."
jacket.nProduct(); //"Checkout my new jacket."
scarf.nProduct(); //"Checkout my new scarf."



/*

//Example 1 from Checkpoint 38 - Inheritance

//Using instances of User (ES5)
function User(email, role) {
  this.email = email;
  this.role = role || "Default User";
}

// methods
User.prototype.greet = function() {
  console.log("Hi, my role is " + this.role + ".");
};

var admin = new User('admin@domain_name.com', "Admin");
var guest = new User('guest@domain_name.com', "Guest");
var new_user = new User('user1@domain_name.com');
admin.greet(); // "Hi, my role is Admin."
guest.greet(); // "Hi, my role is Guest."
new_user.greet(); // "Hi, my role is Default User."


//Using class and constructor keywords (ES6)
class User {
  constructor(email, role) {
    this.email = email;
    this.role = role || "Default User"
  }

  greet() {
    console.log("Hi, my role is " + this.role + ".");
  }
}

var admin = new User('admin@domain_name.com', "Admin");
var guest = new User('guest@domain_name.com', "Guest");
var new_user = new User('user1@domain_name.com');
admin.greet(); // "Hi, my role is Admin."
guest.greet(); // "Hi, my role is Guest."
new_user.greet(); // "Hi, my role is Default User."



//Example 2 from Checkpoint 38 - Inheritance

//ES5
function Vehicle (name, type) {
  this.name = name;
  this.type = type;
};

Vehicle.prototype.getName = function getName () {
  return this.name;
};

Vehicle.prototype.getType = function getType () {
  return this.type;
};

function Car (name) {
  Vehicle.call(this, name, 'car');
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.parent = Vehicle.prototype;
Car.prototype.getName = function () {
  return "This is the car's name: " + this.name;
};

var car = new Car('Mercedes');
console.log( car.getName() ); // This is the car's name: Mercedes
console.log( car.getType() ); // car


//ES6
class Vehicle {
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }

  getName () {
    return this.name;
  }

  getType () {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor (name) {
    super(name, 'car');
  }

  getName () {
    return "This is the car's name: " + super.getName();
  }
}

let car = new Car('Mercedes');
console.log( car.getName() ); // This is the car's name: Mercedes
console.log( car.getType() ); // car
*/

