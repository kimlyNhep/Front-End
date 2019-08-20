function getForm() {
  form = document.inputForm;
  id = form.Id.value;
  name = form.name.value;
  date = form.date.value;
  startTime = form.start.value;
  endTime = form.end.value;
  classRoom = form.classRoom.value;
  subject = form.Subject.value;
  Teacher = form.Teacher.value;

  var student = {
    id,
    name,
    date,
    startTime,
    endTime,
    classRoom,
    subject,
    Teacher
  };
  table = document.getElementById("table-element");
  var rowLength = table.rows.length;
  var row = table.insertRow(rowLength);
  var properties = [
    "Id",
    "name",
    "date",
    "startTime",
    "endTime",
    "classRoom",
    "Subject",
    "Teacher"
  ];
  for (var i = 0; i < properties.length - 1; i++) {
    var cell = document.createElement("td");
    cell.innerHTML = obj[properties[i]];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function FormLoad() {
  var date = new Date(Date.now());
  document.inputForm.date.value = date.toISOString().substr(0, 10);
}
