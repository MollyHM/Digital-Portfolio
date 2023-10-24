emailjs.init("p7Ce2KAoX768-NAEk"); // Replace "user_your_public_key" with your actual public key

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Send email using Email.js
        emailjs.send("service_c0rlw4c", "template_jpml5re", {
            from_name: name,
            from_email: email,
            message: message
        }).then(
            function (response) {
                alert("Email sent successfully!");
            },
            function (error) {
                console.error("Email sending error:", error);
                alert("Email could not be sent. Please try again later.");
            }
        );
    });
});
