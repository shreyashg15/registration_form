$(document).ready(function () {
    $("#applicationForm").submit(function (e) {
        e.preventDefault();

        const $submitButton = $(this).find("button");
        $submitButton.addClass("clicked");

        // Serialize form data
        const formData = $(this).serialize();

        // Send data to server using AJAX
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: formData,
            success: function (response) {
                // Display the response in a styled div
                $("#response").html(response).fadeIn();
                $("#applicationForm")[0].reset(); // Reset the form

                // Reset button style after animation
                setTimeout(() => {
                    $submitButton.removeClass("clicked");
                }, 1000);
            },
            error: function () {
                $("#response").html("<p>Error submitting form. Please try again.</p>").fadeIn();

                // Reset button style after animation
                setTimeout(() => {
                    $submitButton.removeClass("clicked");
                }, 1000);
            }
        });
    });
});
