function landingpage() {
    console.log("landed");
}

let formElement = document.getElementById("form");

formElement.addEventListener("submit", (e) => {
    const email = formElement.email.value;
    e.preventDefault();
    console.log(email);
    alert("subscribed to the newletter successfully!");
    formElement.email.value = "";
})

export { landingpage };