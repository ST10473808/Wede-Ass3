const form = document.getElementById("enquireform");
const servicesDropdown = document.getElementById("enquire");

//  dropdown options to info text
const serviceInfo = {
    "Solar panel installation": "The prices for installing solar panels can range anywhere from R 2000 to R 250 000 or more depending on the type of installation (individual, residence or business), the type of system and the difficulty of the installation.",
    "House painting": "Painting a house including the labor costs and the costs for the paint can be as little as R 50 per square meter to R 200 per square meter.",
    "Solar Panel cleaning and maintenance": "Cleaning a solar panel usually costs R100 to R200 per solar panel. Maintenance fees are given after inspection by a professional.",
    "Gutter cleaning and repairs": "We usually charge R 50 to R 150 for gutter cleaning per square meter."
};


let displayDiv = document.createElement("div");
displayDiv.id = "service-display";
displayDiv.style.marginTop = "20px";
displayDiv.style.fontSize = "1em";
form.after(displayDiv); 


form.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page reload

    // Get the selected service
    const selectedService = servicesDropdown.value;

    // Gets the info text fpr the service info
    const infoText = serviceInfo[selectedService];

    // displays only the selected content
    displayDiv.textContent = infoText;
});

// https://www.youtube.com/watch?v=rMK1eGi5k7I
// zahra bulbulia
// w3schools