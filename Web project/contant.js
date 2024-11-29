document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-form");
    let successMessage = document.getElementById("success-message");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all the required fields.");
        } else {
            successMessage.classList.remove("hidden");
            form.reset();
            setTimeout(function () {
                successMessage.classList.add("hidden");
            }, 5000);
        }
    });
});
