const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    // Full Name validation
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your full name.";
        isValid = false;

    } else if (nameInput.value.trim().length < 3) {

        nameError.textContent = "Name must contain at least 3 characters.";
        isValid = false;
    }

    

});