const Person = {
  firstname: "kimly",
  lastname: "Nhep",
  get dispaly() {
    return `${this.firstname} + ' ' + ${this.lastname}`;
  },
  set dispaly(value) {
    const parts = value.slice(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  }
};
