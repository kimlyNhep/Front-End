function tipCalculator(bill) {
  //checking the condition
  if (bill < 50) tips = (20 / 100) * bill;
  else if (bill < 200) tips = (15 / 100) * bill;
  else tips = (10 / 100) * bill;
  return tips;
}
var bills = [124, 48, 268];
var finialPaid = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
