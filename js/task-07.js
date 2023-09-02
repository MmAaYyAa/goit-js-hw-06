const sizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// console.dir(sizeControlEl);
// console.dir(textEl);

sizeControlEl.addEventListener("input", inputSizeControl);
function inputSizeControl(event) {
    textEl.style.fontSize = sizeControlEl.value + "px";

};