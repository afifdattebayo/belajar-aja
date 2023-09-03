<?php
header("Content-Type: text/event-stream");
header('Cache-Control: no-cache');

$time = date('r');

echo("data: the server time is : {$time}\n\n");
flush();


