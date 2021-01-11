<?php

$data = [
    'Company' => isset($_POST['company']) ? $_POST['company'] : '(Not set)',
    'Name' => isset($_POST['name']) ? $_POST['name'] : '(Not set)',
    'Phone' => isset($_POST['phone']) ? $_POST['phone'] : '(Not set)',
    'Message' => isset($_POST['message']) ? $_POST['message'] : '(Not set)',
];

$headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";

mail('cbd@robox.technology', 'Robox: Feedback', implode("\n", $data), $headers);
