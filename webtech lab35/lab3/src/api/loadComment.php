<?ob_end_clean();?>
<?include "connect.php";?>
<?
header('content-type: application/json;charset=utf-8');
$inputJsonData = file_get_contents("php://input");
$inputJson = json_decode($inputJsonData);
$sRange = $inputJson->sRange;
$eRange = $inputJson->eRange;
$mysqli = new mysqli($host, $user, $password, $database);
$query = "SELECT id, title, mail, value, DATE_FORMAT(date, '%d.%m.%Y') as date FROM $database.$queryTab1 ORDER BY $database.$queryTab1.date DESC LIMIT $sRange, $eRange";
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