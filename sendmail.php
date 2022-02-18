<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->ChartSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//от кого письмо
$mail->setForm('ntx03@mail.ru', 'Гость');
// Кому отправить
$mail->addAddress('ntx033@yandex.ru');
// тема письма
$mail->Subjest = 'Сообщение с сайта';
// тело письма
$body = '<h1>Hallo</h1>';

$mail->Body = $body;

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$POST['name'].'</p>';
}

if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Имя:</strong> '.$POST['message'].'</p>';
}


// Отправляем данные
if (!$mail->send()) {
    $message = 'error';
} else {
    $message = 'данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_decode($response);
?>