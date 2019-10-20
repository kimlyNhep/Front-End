const cards = document.querySelectorAll(".card");

function transition(event) {
  console.log(event.target.tagName);
  if (
    this.classList.contains("active") &&
    event.target.tagName != "H4" &&
    event.target.className != "btn"
  ) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

cards.forEach(card => card.addEventListener("click", transition));
