//////// Lecture: Closures//////////////////////

function retirement(retirementAge) {
  var a = " years left until retirment.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1998);

//retirement(66)(1998);

///Exercise Closures

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestion("designer")("kimly");
