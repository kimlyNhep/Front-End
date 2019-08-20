var Mark = {
  fullname: "Mark Smith",
  mass: 80,
  height: 1.7,
  BMI: function() {
    return this.mass / (this.height * this.height);
  }
};
var John = {
  fullname: "John Smith",
  mass: 80,
  height: 1.77,
  BMI: function() {
    return this.mass / (this.height * this.height);
  }
};

Mark.BMI() > John.BMI()
  ? console.log("BMI's Mark is bigger than John's")
  : console.log("BMI's John is bigger than Mark's");
