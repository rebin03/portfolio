function sendMail() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");
    var emailError = document.getElementById("email-error");

    // Clear previous error messages
    emailError.textContent = '';

    // Check if any of the required fields is empty
    if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
        alert("Please fill in all required fields before sending the message.");
        return;
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    var params = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };

    const serviceID = "service_p8zzin9";
    const templateID = "template_v3srffk";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => console.log(err));
}
