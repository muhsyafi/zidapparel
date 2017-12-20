<?php 
  error_reporting(E_ALL & ~E_NOTICE);
  $filename = $_FILES['file']['name'];
  $destination = '../../assets/img/' . $filename;
  if(move_uploaded_file( $_FILES['file']['tmp_name'] , $destination )){
  	echo "1";
  }else{
  	echo "0";
  }