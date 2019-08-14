var year, yearJohn, yearMark;
now = 2018;
ageJohn = 1990;
ageMark = 1998;

//Logical operator
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);

//Ternary Operator and Switch Statements
var firstname = "John";
var age = 22;

age >= 18
  ? console.log(firstname + "drink beer.")
  : console.log(firstname + "drink juice.");
//Switch Statements
switch (true) {
  case age < 13:
    console.log(firstname + "is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstname + "is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstname + "is a young man.");
    break;
  default:
    console.log(firstname + "is a man.");
}
//Object and Properties
var John = {
  firstname: "John",
  lastname: "Smith",
  birthYear: 1990,
  family: ["jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(John.firstname);
console.log(John["job"]);
console.log(John.family);
