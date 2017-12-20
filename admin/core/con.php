<?php 
class Connect{
	function koneksi(){
		$link = mysqli_connect("127.0.0.1","root","cintaku","zidapparel");
		if ($link) {
			return $link;
		} else {
			return false;
		}
	}
}