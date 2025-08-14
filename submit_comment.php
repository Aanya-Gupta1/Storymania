<?php
$conn = new mysqli("localhost", "root", "", "storymania");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$comment = $_POST['comment'];

if (!empty($comment)) {
    $stmt = $conn->prepare("INSERT INTO comments (comment) VALUES (?)");
    $stmt->bind_param("s", $comment);
    $stmt->execute();
    $stmt->close();
}

$conn->close();
header("Location: Love.html");
exit();
?>