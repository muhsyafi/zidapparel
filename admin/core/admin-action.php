<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE);
include 'con.php';
$act 	= $_GET['act'];
$table 	= $_GET['table'];
$user 	= $_SESSION['user'];
$a 		= $_GET['a'];
$b 		= $_GET['b'];
$c 		= $_GET['c'];
$d 		= $_GET['d'];
$e 		= $_GET['e'];
$f 		= $_GET['f'];
$g 		= $_GET['g'];
$h 		= $_GET['h'];
$i 		= $_GET['i'];
$j 		= $_GET['j'];
$k 		= $_GET['k'];
class Action extends Connect{
	function getTable($query){
		$kueri = mysqli_query($this->koneksi(),$query);
		while ($data = mysqli_fetch_array($kueri)) {
			$arr[]=$data;
		}
		echo json_encode($arr);
	}
	function postTable($query){
		$kueri = mysqli_query($this->koneksi(),$query);
		if ($kueri) {
			echo "1";
		}else{
			echo "0";
		}
	}
	function getLogin($query){
		$kueri = mysqli_query($this->koneksi(),$query);
		if (mysqli_fetch_row($kueri) > 0) {
			$_SESSION['user'] = $a;
			echo "1";
		} else {
			echo "0";
		}
	}
	function logOut(){
		session_destroy();
	}
	function cekUser(){
		if (isset($_SESSION['user'])) {
			echo "1";
		}else{
			echo "0";
		}
	}
}

$init = new Action();
switch ($act) {
	case 'get-category':
		$init->getTable("select * from category where cat_parent_ID=0");
		break;
	case 'get-product-detail' :
		$init->getTable("select * from category where cat_id='$a'");
		break;
	case 'get-product':
		$init->getTable("select * from category order by date_add desc");
		break;	
	case 'save-product' :
		$init->postTable("insert into category values('$g','$a','$b','$c',$d,'$e','0','$f',now())");
		break;
	case 'update-product' :
		$init->postTable("update category set cat_detail='$a',price='$b',cat_image='$c',sizes='$d' where cat_id='$e'");
		break;
	case 'del-product':
		$init->postTable("delete from category where cat_id='$a'");
		break;
	case 'save-category':
		$init->postTable("insert into category values('','0','$a',null,null,'','0','',now())");
		break;
	case 'get-color':
		$init->getTable("select category.cat_name, available_color.cat_col_id, available_color.color, available_color.image from category left join available_color on available_color.cat_id=category.cat_id where available_color.color is not null order by category.cat_name");
		break;
	case 'get-event':
		$init->getTable("select * from event order by date_add");
		break;
	case 'del-event':
		$init->postTable("delete from event where id='$a'");
		break;
	case 'get-order':
		$init->getTable("select * from order_detail order by date_add desc");
		break;
	case 'save-event':
		$init->postTable("insert into event values('','$a','$b','$c',now())");
		break;
	case 'del-order':
		$init->postTable("delete from order_detail where id='$a'");
		break;
	case 'del-color':
		$init->postTable("delete from available_color where cat_col_id='$a'");
		break;
	case 'del-size':
		$init->postTable("delete from available_size where cat_size_id='$a'");
		break;
	case 'get-size':
		$init->getTable("select * from category where cat_parent_ID<>0");
		break;
	case 'save-color':
		//$init->postTable("insert into available_color values('','$b','$b','$c','$a','0',now())");
		$init->postTable("insert into available_color values('','$a','$a','$b','$c','0',now())");
		break;
	case 'save-image':
		$init->postTable("insert into available_image values('','$a','$b',now())");
		break;
	case 'save-size':
		$init->postTable("insert into available_size values('','$b','$a','0',now())");
		break;
	case 'get-message':
		$init->getTable("select * from message order by date_add desc");
		break;
	case 'del-message':
		$init->getTable("delete from message where id='$a'");
		break;
	case 'get-stat':
		$init->getTable("select ( select count(*) as total from statistic where date_add>=curdate()) as day, (select count(*) as total from statistic WHERE month(date_add) = EXTRACT(month FROM (NOW()))) as month, (select count(*) as total from statistic where year(date_add)=year(now())) as year, (select count(*) as total from statistic) as total");
		break;
	case 'get-full-stat':
		$init->getTable("select * from statistic order by date_add desc");
		break;
	case 'logout':
		$init->logOut();
		break;
	case 'cek-user':
		$init->cekUser();
		break;
	case 'get-gallery':
		$init->getTable("select * from gallery order by date_add desc");
		break;
	case 'del-gallery' :
		$init->postTable("delete from gallery where id='$a'");
		break;
	case 'save-gallery' :
		$init->postTable("insert into gallery values('','$a',now())");
		break;
	case 'get-link' :
		$init->getTable("select * from link order by id");
		break;
	case 'del-link' :
		$init->postTable("delete from link where id='$a'");
		break;
	case 'save-link':
		$init->postTable("delete from link where id='$d'");
		$init->postTable("insert into link values('','$a','$b','$c',now())");
		break;
	case 'get-cms' :
		$init->getTable("select * from cms");
		break;
	case 'save-cms' :
		$init->postTable("delete from cms");
		$init->postTable("insert into cms values('','$a','$b','$c','$d','$e',now())");
		break;
	case 'get-dist' :
		$init->getTable('select * from distributor');
		break;
	case 'save-dist' :
		$init->postTable("update distributor set detail='$a'");
		break;
	case 'get-pay' :
		$init->getTable("select * from payment");
		break;
	case 'save-pay' :
		$init->postTable("delete from payment where id='$d'");
		$init->postTable("insert into payment values('','$a','$b','$c',now())");
		break;
	case 'del-pay' :
		$init->postTable("delete from payment where id='$a'");
		break;
	case 'get-bill' :
		$init->getTable("select * from billing a, order_detail b where a.order_id='$a' and b.cust_id='$a'");
		break;
	case 'get-logo' :
		$init->getTable("select * from logo");
		break;
	case 'update-logo-1' :
		$init->postTable("update logo set logo_1='$a'");
		break;
	case 'update-logo-2' :
		$init->postTable("update logo set logo_2='$a'");
		break;
	default:
		# code...
		break;
}
