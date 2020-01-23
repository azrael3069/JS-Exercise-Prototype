/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//function Person(name,age) {
   const Person=function(name,age){
     //instances called for
    this.name=name;
    this.age=age;
    this.stomach=[];
   // const someFood= stomach.push('somefood');
   }
//Object.prototype.toString()
Person.prototype.toString=function(){
  return this.name + this.age;
}
Person.prototype.eat=function(someFood){
  this.stomach=[i++];
}
  Person.prototype.poop=function() {
    this.stomach=[i--];
  }
  Person.prototype.eat = function(someFood) {
    if (this.stomach.length < 10) { this.stomach.push(someFood);}
      return this.stomach;
  }
  Person.prototype.poop = function() {
    this.stomach = [];
  }


/**
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//function Car() {
const Car=function(model,milesPerGallon){
 this.model=model;
  this.milesPerGallon= milesPerGallon;
  this.tank=0;
  this.odometer=0;
}
  Car.prototype.fill=function(gallons){
    this.tank=(gallons);
  }
  Car.prototype.drive=function(distance){
    this.odometer=(i++);
  }
  

/*	Car.prototype.drive = function(distance) {
  TASK 3	        this.odometer = this.odometer + distance;
    - Write a Baby constructor subclassing Person.	        this.tank = this.tank - distance / this.milesPerGallon;
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.	    }*/
//const drive= new Car ("drive(distance");
//The fill() method changes all elements in an array to a static value, from a start index
 //(default 0) to an end index (default array.length). It returns the modified array.

/*const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
*/






/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
const Baby=function (name,age,favoriteToy) {
  this.name=name;
  this.age=age;
  this.favoriteToy=favoriteToy;
  //this.play=function()[
    //return 'Playing with x';
  //]
}
  Baby.prototype.play=function(){
}
Baby.prototype.toString=function(){
  return `Playing with ${this.favoriteToy}`;
}
Baby.prototype.eat=function(someFood){
  this.stomach=[i++];
}
  Baby.prototype.poop=function() {
    this.stomach=[i--];
  
}




/*Person.prototype.toString=function personToString(){
  return this.name + this.age;  */
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. when a function is contained in global scope, the value of "this" inside of that function will be the window object
      function greetMe(name){
        consle.log('Hi' + name);
        console.log(this);
      }
      greetMe('John');
  2.  when a func is called by a proceeding dot, the object before that dot is this
          var greetMe={
            greeting:'Hello',
            speak:function (name) {
              console.log(this.greeting + name);
              console.log(this);
            }
          }
          greetMe.speak('John');
3. When a constructor function is used, this refers to the specific instance
 of the object that is created and returned by the constructor function.
              function GreetMe(name) {

              }
  4. Whenever call or apply method is used, this is explicitly defined
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
