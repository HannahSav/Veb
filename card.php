<?php

$x = (int)$_POST["koordx"];
$y = (int)$_POST["koordy"];
$r=(int)$_POST['radius'];

var_dump($_POST);
if (session_id() === "") {
	session_start();
}
$start = microtime(true);

date_default_timezone_set("UTC");
$time = time() + 3 * 3600; 
echo "<p id='time'>Текущее время: ".date("H:i:s", $time)."</p>";

echo "Обработка данных: <br>";

	$t=(float)round((microtime(true)-$start), 4);
	if($t==0)$t="менее 0.0001";
	echo "Время работы скрипта: ".$t." сек<br>";
	echo $x;
	echo $y;
	echo $r;
	echo "\n";
	result($x, $y, $r);
function result($x, $y, $r)	{
	if($y % 2 == 1) echo "ну ахуеть теперь";
	else echo "y четный, бля";

}
?>