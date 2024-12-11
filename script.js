$(document).ready(function () {
    $("#applicationForm").submit(function (e) {
        e.preventDefault();

        const $submitButton = $(this).find("button");
        $submitButton.addClass("clicked");

        // Serialize form data
        const formData = $(this).serialize();

        // Submit form data via AJAX
        $.ajax({
            type: "POST",
            url: "submit.php", // Adjust the path if needed
            data: formData,
            success: function (response) {
                $("#response").html(response).fadeIn();
                $("#applicationForm")[0].reset(); // Reset the form
                $submitButton.removeClass("clicked");
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
                $("#response").html("<p>Error submitting form. Please try again.</p>").fadeIn();
                $submitButton.removeClass("clicked");
            }
        });
    });
});
