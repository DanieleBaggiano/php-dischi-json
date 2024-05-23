<?php
$list_disc = file_get_contents("dischi.json");

$list = json_decode($list_disc, true);

// var_dump($list);

$response_data = [
    "results" => $list,
    "success" => true,
];

$json_list = json_encode($response_data);

header("Content-Type: application/json");

echo $json_list;
