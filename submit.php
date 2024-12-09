<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize input data
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '';

    // Check if all fields are filled
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($address)) {
        echo "
            <h2>Application Submitted Successfully</h2>
            <div>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Address:</strong> $address</p>
            </div>
        ";
    } else {
        echo "<p style='color:red;'>All fields are required!</p>";
    }
} else {
    echo "Invalid request.";
}
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Your existing PHP code
}

?>
