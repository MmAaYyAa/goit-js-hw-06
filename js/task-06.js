const validationInputEl = document.querySelector("#validation-input");
const inputLengthEl = parseInt(validationInputEl.dataset.length);

// console.dir(validationInputEl);
// console.log(inputLengthEl);

validationInputEl.addEventListener('blur', validLength);
function validLength(event) {
    if (validationInputEl.value.length === inputLengthEl) {
        validationInputEl.classList.add("valid");
        validationInputEl.classList.remove("invalid");
    } else {
        validationInputEl.classList.add("invalid");
        validationInputEl.classList.remove("valid");
    }
};
