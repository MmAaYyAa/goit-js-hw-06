const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

// console.log(inputEl);
// console.log(outputEl);

inputEl.addEventListener("input", handleInput);
function handleInput(event) {
    if (inputEl.value === "") {
        outputEl.value = "Anonymous";  
    } else {
        outputEl.textContent = inputEl.value.trim();
    }
}

