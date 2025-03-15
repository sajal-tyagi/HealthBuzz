// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Health Issue Assessment Form
    const healthForm = document.getElementById('health-form');
    const healthDescription = document.getElementById('health-description');
    const diagnosisResult = document.getElementById('diagnosis-result');
    const firstAidDiv = document.getElementById('first-aid');
    const lifestyleChangesDiv = document.getElementById('lifestyle-changes');

    healthForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        const issue = healthDescription.value.toLowerCase();

        // Hardcoded symptom-to-diagnosis mapping
        const diagnoses = {
            "stomach pain": "Possible Diagnosis: Gastritis, Peptic Ulcer, or Irritable Bowel Syndrome (IBS).",
            "heart attack": "Possible Diagnosis: Myocardial Infarction. Seek immediate medical attention!",
            "fever": "Possible Diagnosis: Viral Infection, Flu, or Malaria.",
            "headache": "Possible Diagnosis: Migraine, Tension Headache, or Sinusitis."
        };

        // Provide diagnosis based on input
        if (issue in diagnoses) {
            diagnosisResult.textContent = diagnoses[issue];
        } else {
            diagnosisResult.textContent = "No matching diagnosis found. Please provide more details.";
        }

        // Simple keyword-based recommendations for first aid and lifestyle changes
        if (issue.includes('headache')) {
            firstAidDiv.innerHTML = '<p>First Aid: Rest in a quiet, dark room. Apply a cold compress to your forehead.</p>';
            lifestyleChangesDiv.innerHTML = '<p>Lifestyle Changes: Ensure regular sleep, stay hydrated, and manage stress.</p>';
        } else if (issue.includes('cut') || issue.includes('wound')) {
            firstAidDiv.innerHTML = '<p>First Aid: Clean the wound with soap and water. Apply antibiotic ointment and cover with a sterile bandage.</p>';
            lifestyleChangesDiv.innerHTML = '<p>Lifestyle Changes: Keep the wound clean and dry. Watch for signs of infection.</p>';
        } else {
            firstAidDiv.innerHTML = '<p>No specific recommendations available. Please consult a healthcare professional.</p>';
            lifestyleChangesDiv.innerHTML = '';
        }
    });
});

// Find Nearby Facilities
const findFacilitiesBtn = document.getElementById('find-facilities');
const facilityList = document.getElementById('facility-list');

findFacilitiesBtn.addEventListener('click', function () {
    // Simulate fetching nearby facilities (replace with real API call)
    setTimeout(() => {
        facilityList.innerHTML = `
            <ul>
                <li><strong>City Hospital</strong> - 2.5 km away</li>
                <li><strong>Community Clinic</strong> - 1.8 km away</li>
                <li><strong>Emergency Care Center</strong> - 3.2 km away</li>
            </ul>
        `;
    }, 1000);
});

// Real-Time Hospital Information
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Sample hospital data (can be replaced with real-time API data)
    const hospitalData = [
        {
            name: "City General Hospital",
            address: "123 Main Street, Springfield",
            distance: "2.5 km",
            bedsAvailable: 12,
            contact: "555-1234",
            rating: 4.5,
        },
        {
            name: "Springfield Medical Center",
            address: "456 Elm Street, Springfield",
            distance: "3.8 km",
            bedsAvailable: 8,
            contact: "555-5678",
            rating: 4.2,
        },
        {
            name: "Downtown Health Clinic",
            address: "789 Pine Avenue, Springfield",
            distance: "1.2 km",
            bedsAvailable: 5,
            contact: "555-9012",
            rating: 4.8,
        },
    ];

    // Get the container element where hospital cards will be displayed
    const container = document.getElementById("hospital-info");

    // Check if container exists
    if (!container) {
        console.error("Container element with ID 'hospital-info' not found.");
        return;
    }

    // Loop through each hospital and create a card dynamically
    hospitalData.forEach((hospital) => {
        // Create a new div for each hospital card
        const card = document.createElement("div");
        card.classList.add("hospital-card");

        // Populate the card with hospital details using template literals
        card.innerHTML = `
            <h3 class="hospital-name">${hospital.name}</h3>
            <p><strong>Address:</strong> ${hospital.address}</p>
            <p><strong>Distance:</strong> ${hospital.distance}</p>
            <p><strong>Beds Available:</strong> ${hospital.bedsAvailable}</p>
            <p><strong>Contact:</strong> ${hospital.contact}</p>
            <p><strong>Rating:</strong> ${hospital.rating} ★</p>
        `;

        // Append the card to the container
        container.appendChild(card);
    });
});

// JavaScript for Emergency Booking Section

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        // Handle form submission
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from redirecting or refreshing

            // Get form values
            const userName = document.getElementById("user-name").value.trim();
            const userContact = document.getElementById("user-contact").value.trim();
            const bookingType = document.getElementById("booking-type").value;
            const bookingDetails = document.getElementById("booking-details").value.trim();

            // Validate form inputs
            if (!userName || !userContact || !bookingType) { // Fix logical operator
                alert("Please fill out all required fields.");
                return;
            }

            // Show confirmation popup
            const confirmationMessage = `Booking Confirmed!\n\nName: ${userName}\nContact: ${userContact}\nService: ${bookingType}\nDetails: ${bookingDetails}`; // Fix template literal syntax
            showPopup(confirmationMessage);

            // Clear the form after submission
            bookingForm.reset();
        });
    }

    // Define showPopup function
    function showPopup(message) {
        alert(message); // Replace with a custom popup implementation if needed
    }
});

// Function to display a popup message
function showPopup(message) {
    // Create popup elements
    const popup = document.createElement("div");
    popup.id = "popup-message";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageText.style.marginBottom = "20px";

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.padding = "10px 15px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#007bff";
    closeButton.style.color = "#fff";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    // Close button functionality
    closeButton.addEventListener("click", function () {
        document.body.removeChild(popup);
    });

    // Append elements to the popup
    popup.appendChild(messageText);
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
}

// Geolocation for Facility Finder
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    alert(`Your location: Latitude: ${lat}, Longitude: ${lon}`);
        
    // Use this location data to fetch nearby facilities from an API
    // Example: fetch(`https://api.example.com/facilities?lat=${lat}&lon=${lon}`)
} 
  
// Function to toggle FAQ visibility
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
             alert("Location information is unavailable.");
             break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
               break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Call getLocation when "Find Nearby Facilities" is clicked
findFacilitiesBtn.addEventListener('click', getLocation);

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    contactForm.reset();
});

// Newsletter Subscription Form Submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
});
