<?ob_end_clean();?>
<?include "connect.php";?>
<?
$mysqli = new mysqli($host, $user, $password, $database);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: " . $mysqli->connect_error;
}
$query = "SELECT COUNT(*) as count FROM $database.$queryTab0";
$resultArray = array();
if($result = $mysqli->query($query)){
    while($row = $result->fetch_array(MYSQLI_ASSOC)){
        $resultArray[] = $row;
    }
    echo json_encode($resultArray, JSON_UNESCAPED_UNICODE);
}
$result->close();
$mysqli->close();
?>