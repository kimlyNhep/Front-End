function getForm() {
  form = document.inputForm;
  username = form.username.value;
  age = form.age.value;
  sex = form.sex.value;
  DOB = form.DOB.value;
  AcademicYear = form.AcademicYear.value;
  address = form.address.value;

  var obj = {
    username,
    age,
    sex,
    DOB,
    AcademicYear,
    address
  };
  table = document.getElementById("table-element");
  var rowLength = table.rows.length;
  var row = table.insertRow(rowLength);
  var properties = ["username", "age", "sex", "DOB", "AcademicYear", "address"];
  for (var i = 0; i < properties.length - 1; i++) {
    var cell = document.createElement("td");
    cell.innerHTML = obj[properties[i]];
    row.appendChild(cell);
  }
  //create button
  var cell = document.createElement("td");
  var button = document.createElement("input");
  button.type = "button";
  button.value = "Show Address";
  //addEventListener
  button.addEventListener("click", event => {
    alert(obj["address"]);
  });
  cell.appendChild(button);
  row.appendChild(cell);
  table.appendChild(row);
}
