function getForm() {
  form = document.inputForm;
  id = form.id.value;
  name = form.name.value;
  date = form.date.value;
  startTime = form.start.value;
  endTime = form.end.value;
  classRoom = form.ClassRoom.value;
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
    "id",
    "name",
    "date",
    "startTime",
    "endTime",
    "classRoom",
    "subject",
    "Teacher"
  ];
  for (var i = 0; i < properties.length; i++) {
    var cell = document.createElement("td");
    cell.innerHTML = student[properties[i]];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function FormLoad() {
  var date = new Date(Date.now());
  document.inputForm.date.value = date.toISOString().substr(0, 10);
  document.inputForm.start.value = date.toTimeString().substr(0, 8);
}
