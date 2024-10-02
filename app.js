// Initialize EmailJS with your user ID
(function(){
    emailjs.init("r7ElJFmU8p1oLg36h");
})();


// Function to send email using EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Send the email using the form data
    
    emailjs.sendForm('service_ibz02cj', 'template_foqrjst', this)
        .then(function() {
            alert("Message Sent Successfully!");
        }, function(error) {
            alert("Failed to send the message: " + JSON.stringify(error));
        });
});
