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

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Please enter your email address.";
        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Subject validation
    if (subjectInput.value.trim() === "") {

        subjectError.textContent = "Please enter a subject.";
        isValid = false;

    } else if (subjectInput.value.trim().length < 5) {

        subjectError.textContent = "Subject must contain at least 5 characters.";
        isValid = false;
    }


    // Message validation
    if (messageInput.value.trim() === "") {

        messageError.textContent = "Please enter your message.";
        isValid = false;

    } else if (messageInput.value.trim().length < 10) {

        messageError.textContent = "Message must contain at least 10 characters.";
        isValid = false;
    }


    // Success message
    if (isValid) {

        successMessage.textContent =
            "Your message has been submitted successfully!";

        contactForm.reset();
    }

    

});