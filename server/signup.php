
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$fname = $lname = $email = $pss = $confpss = "";
echo $_SERVER["REQUEST_METHOD"];
if ($_SERVER["REQUEST_METHOD"] === "GET") {
  if (empty($_GET["FirstName"])) {
    $fname = "FristName is required";
    echo $_GET["FirstName"];
  } else {
    $fname = $_POST["FirstName"];
  }
  if (empty($_POST["LastName"])) {
    $lname = "LastName is required";
  } else {
    $lname = $_POST["LastName"];
  }
  if (empty($_POST["Email"])) {
    $email = "Email is required";
  } else {
    $email = $_POST["LastName"];
  }
  if (empty($_POST["Password"])) {
    $pss = "password is required";
  } else {
    $pss = $_POST["Password"];
  }
  if (empty($_POST["ConfirmPassword"])) {
    $confpss = "password is required";
  } else {
    $confpss = $_POST["ConfirmPassword"];
  }
  echo $fname, $lname, $email, $pss, $confpss;
}
