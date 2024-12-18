function landingpage() {
    console.log("landed");
}

let formElement = document.getElementById("form");

formElement.addEventListener("submit", (e) => {
    const email = formElement.email.value;
    e.preventDefault();
    console.log(email);
    formElement.email.value = "";
})

export { landingpage };