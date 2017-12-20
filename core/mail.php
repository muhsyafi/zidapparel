<?php 
error_reporting(E_ALL & ~E_NOTICE);
$id = '9334';
$to = $_GET['mail'];
$name;
$phone;
$email;
$address;
include 'con.php';
/**
* 
*/
class Data extends Connect
{
	function getTable($kueri)
	{
		$kueri=mysqli_query($this->koneksi(),$kueri);
		while ($data=mysqli_fetch_array($kueri)) {
			$arr[] = $data;
		}
		return ($arr);
	}
}

$hasil = new Data();
//$hasil->getTable();
foreach ($hasil->getTable("select * from order_detail where cust_id='$id'") as $key => $value) {
	$name =  $value['contact_name'];
	$phone =  $value['phone_number'];
	$email =  $value['email_address'];
	$address =  $value['address'];
}


$mail=	'<style>
			.container{
				width:80%;margin:0px auto;
				height:auto;
				text-align:center;
				border:2px solid #EDEDED;
				background-color:#EDEDED;
				position: relative;
				padding-bottom:100px;
			}
			img{
				margin:50px 0px 50px 0px;
				width: 100%;
				max-width: 400px;
			}
			.row{
				width: 100%;
				text-align: center;
			}
			.row td:nth-child(1){text-align: right;width: 50%;}
			.btn{
				line-height:30px;
				display:block;
				margin:0px auto;
				text-decoration:none;
				color:black;
				width:250px;
				text-transform:uppercase;
				height:32px;
				background-color:#266098;
			}
			.btn:hover{
				color:white;
			}
		</style>
		<div class="container">
		<img src="http://www.zid-apparel.com/assets/img/logo.png">
		<h2>Bos, ada pesanan baru</h2>
<div class="row">
	<table class="table table-hover" width="100%">
		<thead>
			<tr>
				<th style="text-align: right;">Item</th>
				<th style="text-align: left;">Value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Name :</td>
				<td>'.$name.'</td>
			</tr>
			<tr>
				<td>Phone Number :</td>
				<td>'.$phone.'</td>
			</tr>
			<tr>
				<td>Email Address :</td>
				<td>'.$email.'</td>
			</tr>
			<tr>
				<td>Address :</td>
				<td>'.$address.'</td>
			</tr>
		</tbody>
	</table>
	<a href="http://www.zid-apparel.com/#/login">Cek</a>
</div>
		</div>';
$subject = 'Order Baru';
$headers = 'From: admin@zid-apparel.com' . "\r\n" .
		   'Content-type: text/html';
$to = 'muhsyafi@icloud.com';
$masuk=mail($to, $subject, $mail, $headers);
if ($masuk) {
	echo "1";
}else{
	echo "0";
}