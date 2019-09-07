//Function Constructor

var John = {
  name: "john",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
  };
};

var John = new Person("John", 1990, "teacher");
John.calculateAge();

/*
    using new Operator that means it will create the empty object
    so this keyword in the constructor function will not point 
    into the global object it will point to that empty object 
    then we could add its member throw the function.
*/
/*Inheritance */
//We using Prototype to make an inheritance

Person.prototype.show = function() {
  console.log(`${this.name} is ${this.job}`);
};

var Mark = new Person("Mark", 1998, "Developer");
Mark.show();

/* Object.create */

var PersonProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var june = Object.create(PersonProto);
june.name = "June";
june.yearOfBirth = 1998;
june.job = "Designer";

var july = Object.create(PersonProto, {
  name: { value: "July" },
  yearOfBirth: { value: 1998 },
  job: { value: "Developer" }
});
