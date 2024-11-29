let bookNowButtons=document.querySelectorAll('.book-now');
bookNowButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        window.location.href='book.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let itinerariesData = [
        {
            "id": "three-day-itinerary",
            "name": "3-Day Itinerary",
            "cost": 265
        },
        {
            "id": "five-day-itinerary",
            "name": "5-Day Itinerary",
            "cost": 399
        },
        {
            "id": "seven-day-itinerary",
            "name": "7-Day Itinerary",
            "cost": 599
        }
    ];

    let itinerarySelect = document.getElementById("itinerary");

    itinerariesData.forEach(itinerary => {
        let option = document.createElement("option");
        option.value = itinerary.id;
        option.textContent = `${itinerary.name} - $${itinerary.cost}`;
        itinerarySelect.appendChild(option);
    });

    itinerarySelect.addEventListener('change', function() {
        let selectedItineraryId = itinerarySelect.value;
        let selectedItinerary = itinerariesData.find(itinerary => itinerary.id === selectedItineraryId);
        let costDisplay = document.getElementById('itinerary-cost');
        
        if (selectedItinerary) {
            costDisplay.textContent = `Total Cost: $${selectedItinerary.cost}`;
        }
    });

    let bookingForm = document.getElementById("booking-form");
    let popup = document.getElementById("popup");
    let closeButton = document.querySelector(".close-button");
    let okButton = document.getElementById("ok-button");
    let errorMessage = document.getElementById("error-message");

    function validateForm() {
        let cardName = document.getElementById("card-name").value.trim();
        let cardNumber = document.getElementById("card-number").value.trim();
        let expiryDate = document.getElementById("expiry-date").value.trim();
        let cvv = document.getElementById("cvv").value.trim();

        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            errorMessage.textContent = "Please Fill In All Payment Details.";
            errorMessage.style.display = "block";
            return false;
        }

        if (cardNumber.length !== 12 || isNaN(cardNumber)) {
            errorMessage.textContent = "Card number must be 12 digits.";
            errorMessage.style.display = "block";
            return false;
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            errorMessage.textContent = "CVV must be 3 digits.";
            errorMessage.style.display = "block";
            return false;
        }

        errorMessage.style.display = "none";
        return true;
    }

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            popup.style.display = "flex";
            console.log("Popup shown after form validation.");

            setTimeout(function() {
                window.location.href = "index.html";
            }, 3000);
        } else {
            console.log("Validation failed. Popup not shown.");
        }
    });

    if (closeButton) {
        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
            window.location.href = "itineraries.html";
        });
    }

    if (okButton) {
        okButton.addEventListener("click", function() {
            popup.style.display = "none";
            window.location.href = "index.html";
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
            window.location.href = "itineraries.html";
        }
    });
});