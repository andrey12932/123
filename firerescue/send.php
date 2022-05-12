<head><script defer="defer" src="794.bb99e51254c1d71ffb8d.js"></script><script defer="defer" src="scripts.14aeead4d19410f74e47.js"></script><link href="794.cd7ffb0a4e1f8e3b6fc0.css" rel="stylesheet"><link href="scripts.d6dc3097db7979fa2c35.css" rel="stylesheet"></head><?php 
$to  = "<andrey04-04@bk.ru>, " ; 
$to .= "andrey04-04@bk.ru>"; 

$subject = "Заголовок письма"; 

$message = ' <p>Текст письма</p> </br> <b>1-ая строчка </b> </br><i>2-ая строчка </i> </br>';

$headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
$headers .= "From: От кого письмо <from@example.com>\r\n"; 
$headers .= "Reply-To: reply-to@example.com\r\n"; 

mail($to, $subject, $message, $headers);

alert("Hello World");

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}
?>