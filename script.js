$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        const firstname = $("#firstname").val(); // Get first name
        const lastname = $("#lastname").val(); // Get last name
        const email = $("#email").val(); // Get email
        const phone = $("#phone").val(); // Get phone
        const dob = $("#dob").val(); // Get date of birth
        const gender = $("input[name='gender']:checked").val(); // Get selected gender
        const address = $("#address").val(); // Get address

        // Format the Date of Birth (DD/MM/YYYY)
        const dobArray = dob.split("-");  // Split the date (YYYY-MM-DD) into an array [YYYY, MM, DD]
        const formattedDob = `${dobArray[2]}/${dobArray[1]}/${dobArray[0]}`; // Re-arrange to DD/MM/YYYY

        const name = `${firstname} ${lastname}`; // Concatenate first and last name

        const displayData = `
            <div><strong>Name:</strong> ${name}</div>
            <div><strong>Email:</strong> ${email}</div>
            <div><strong>Phone:</strong> ${phone}</div>
            <div><strong>Date of Birth:</strong> ${formattedDob}</div>
            <div><strong>Gender:</strong> ${gender}</div>
            <div><strong>Address:</strong> ${address}</div>
        `;

        $("#displayData").html(displayData); // Display data

        // Show success message with animation
        $("#successMessage")
            .hide() // Hide initially
            .css({ backgroundColor: "#e8f5e9", borderColor: "#81c784" }) // Apply animation-friendly style
            .slideDown(500) // Slide down animation
            .fadeIn(500); // Fade-in animation
    });
});
