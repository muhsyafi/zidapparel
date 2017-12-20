<?php 
  error_reporting(E_ALL & ~E_NOTICE);
  $path = '../assets/img/public/'.$_GET['path'];
  $filename = $_FILES['file']['name'];
  if (!file_exists($path)) {
  	mkdir($path);
  }
  $destination = $path.'/' . $filename;
  if(move_uploaded_file( $_FILES['file']['tmp_name'] , $destination )){
  	echo "1";
  }else{
  	echo "0";
  }