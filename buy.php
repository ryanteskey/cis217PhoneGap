<?php
/**
 * Created by JetBrains PhpStorm.
 * User: ryant0524
 * Date: 5/21/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */
  $name = $_GET['name'];
  $qty = $_GET['qty'];
  $price = $_GET['price'];
  $total = $_GET['total'];

//------------------------------------------------------- Send Email--------------------------------------------------->
  /* These will gather what the user has typed into the fieled. */
$emailSubject = "Pizza Order ";
$to = 'ryanteskey@gmail.com';//, dljones@scc.spokane.edu';
$from = "shakey's_pizza_parlor@cis217-4.ryanteskey.com";

$order = "ORDER<br/>---------------------<br/><br/>";
  $length = count($_GET);
  for($i=0; $i<$length; $i++){
    $order .= "<br/>\r\nName: ".$name[$i]."&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Quantity: ".$qty[$i]."&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Price: ".$price[$i]."<br/><br/>";
  }
$order .= "<br/>\r\nTotal: ".$total."";
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= "To: $to" . "\r\n";
$headers .= "From: $from" . "\r\n";
//  if(isset($_GET['submit']))
  mail($to, $emailSubject, $order, $headers);


//$form = <<<END_OF_FORM
//<form method="get" action="buy.php">
//  <label for="name">Name:</label><br/>
//  <input type="text" name="name"/><br/>
//  <label for="address">Address: </label><br/>
//  <input type="text" name="address" /><br/>
//  <label for="city">City: </label><br/>
//  <input type="text" name="city"><br/>
//  <label for="email">Email: </label><br/>
//  <input type="email" name="email"><br/>
//  <input type="submit" name="submit" value="Submit Order" />
//  <input type="hidden" name="order" value="$order" />
//</form>
//END_OF_FORM;

  $form = <<<END_OF_FORM
<h1 style="color:green">Pizza is on its way</h1>
END_OF_FORM;
echo json_encode($form);