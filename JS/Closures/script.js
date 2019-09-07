function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1998);

retirement(66)(1998);
