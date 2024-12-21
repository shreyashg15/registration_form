$(document).ready(function () {
    // Initialize Select2 for searchable dropdown
    $("#country").select2({
        placeholder: "Select a country",
        allowClear: true
    });

    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        const firstname = $("#firstname").val(); // Get first name
        const lastname = $("#lastname").val(); // Get last name
        const email = $("#email").val(); // Get email
        const phone = $("#phone").val(); // Get phone
        const gender = $("#gender").val(); // Get gender
        const country = $("#country").val(); // Get country
        const address = $("#address").val(); // Get address

        const name = `${firstname} ${lastname}`; // Concatenate first and last name

        const displayData = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Gender:</strong> ${gender}<br>
            <strong>Country:</strong> ${country}<br>
            <strong>Address:</strong> ${address}
        `;

        $("#displayData").html(displayData); // Display data

        $("#successMessage")
            .hide() // Hide initially
            .css({ backgroundColor: "#c8e6c9", borderColor: "#81c784" }) // Apply animation-friendly style
            .slideDown(500) // Slide down animation
            .fadeIn(500); // Fade-in animation
    });
});
