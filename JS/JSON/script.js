var json = JSON.stringify({ name: "abc", address: "takhmau" });
var obj = JSON.parse(json);
console.log(json);
document.write(obj["name"]);
