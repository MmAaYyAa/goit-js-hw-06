const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget);
    
    const { email, password } = event.currentTarget.elements;
    
    if (!email.value || !password.value) {
        alert("Fill out all form fields,please!");
        return;
    }

    const info = {
        email: email.value,
        password: password.value,
    };
    console.log(info);
    loginForm.reset();

}
