<?php
// api.php
header("Content-Type: application/json");
require 'db.php';

$search = $_GET['search'] ?? '';
$country = $_GET['country'] ?? '';
$rating = $_GET['rating'] ?? '';
$fees = $_GET['fees'] ?? '';

$sql = "SELECT * FROM universities WHERE 1=1";
$params = [];

if ($search) {
    $sql .= " AND (name LIKE ? OR country LIKE ?)";
    $params[] = "%$search%";
    $params[] = "%$search%";
}
if ($country) {
    $sql .= " AND country = ?";
    $params[] = $country;
}
if ($rating) {
    $sql .= " AND rating >= ?";
    $params[] = $rating;
}
if ($fees) {
    $sql .= " AND fees <= ?";
    $params[] = $fees;
}

$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$universities = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($universities);
?>