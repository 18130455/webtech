<?ob_end_clean();?>
<?include "connect.php";?>
<?
header('content-type: application/json;charset=utf-8');
$inputJsonData = file_get_contents("php://input");
$inputJson = json_decode($inputJsonData);
$title = $inputJson->title;
$mail = $inputJson->mail;
$value = $inputJson->value;
$date = $inputJson->date;
$mysqli = new mysqli($host, $user, $password, $database);
$query = "INSERT INTO $database.$queryTab1 (id, title, mail, value, date) VALUES (NULL, '$title', '$mail', '$value', '$date')";
$mysqli->query($query);
$mysqli->close();
?>