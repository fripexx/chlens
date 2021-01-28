<?php

$length = $_POST['length'];
$girth = $_POST['girth'];

//$arr[value] = percent;
// size = 16
$circum["0"] = 2.6; 
$circum["8"] = 0.4; 
$circum["8.63"] = 1.1;
$circum["9.1"] = 1.2;
$circum["9.7"] = 5.;
$circum["10.5"] = 7.;
$circum["11.2"] = 17.5;
$circum["11.7"] = 12.5;
$circum["12.5"] = 24.8;
$circum["13"] = 10.2;
$circum["13.6"] = 11.3;
$circum["14.2"] = 2.8;
$circum["14.8"] = 4.;
$circum["15.6"] = 0.4;
$circum["16.3"] = 0.4;
$circum["17"] = 0.1;

$user_circum = 13.7;
$user_circum_percent = 0;

foreach($circum as $key => $value)
{
    if($user_circum == floatval($key))
    {
        
        break;
    }
    if($user_circum < floatval($key))
    {
        echo $key . " ";
        break;
    }
}


?>