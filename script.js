function changeColor() {
  const colors = ["#ff6b6b", "#6bcfff", "#6bff95", "#f7ff6b", "#d36bff"];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}
