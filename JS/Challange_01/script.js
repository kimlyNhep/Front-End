var massMark = 80,
  massJohn = 70,
  heightMark = 177,
  heightJohn = 183;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
var isMarkBMIHigher = BMIMark > BMIJohn;
console.log("Is mark's BMI higher than John's?" + isMarkBMIHigher);
