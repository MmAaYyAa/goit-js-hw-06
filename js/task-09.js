const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor(event) {
    const newColor = getRandomHexColor();
    bodyEl.style.backgroundColor = newColor;
    colorEl.textContent = newColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}