// This script changes the background color randomly when the button is clicked

const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  const colors = ["#f4a261", "#2a9d8f", "#e76f51", "#264653", "#e9c46a"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

