var John = {
  fullname: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

var Mark = {
  fullname: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

John.calcTips();
Mark.calcTips();
//console.log(John, Mark);

John.average = calcAverage(John.tips);
Mark.average = calcAverage(Mark.tips);
console.log(John, Mark);
