var countries = ["India", "Japan", "Russia", "UAE"];

var states = ["Delhi", "Bangalore", "Assam", "Goa"];

var city = new Array("Paschim Vihar", "Electronic City");

console.log(states[1]);
//console.log(states.length);

states[0] = "Punjab"; //replace
//console.log(states);

var user = ["Utk", "Utk@utk.com", 3, true]; //not a good practice
console.log(user);

user.pop(); //remove last value
user.pop();
console.log(user);

user.unshift("new value");
console.log(user);

user.shift();
console.log(user);

console.log(user.indexOf("Bhavesh"));

console.log(Array.from("Danny"));
