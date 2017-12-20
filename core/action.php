<?php
session_start();
error_reporting(E_ALL & ~E_NOTICE);
include 'con.php';
$act 	= $_GET['act'];
$table 	= $_GET['table'];
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
$l 		= $_GET['l'];
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
	function getLogin($query,$a){
		$kueri = mysqli_query($this->koneksi(),$query);
		if (mysqli_fetch_row($kueri) > 0) {
			$_SESSION['user'] = $a;
			echo "1";
		} else {
			echo "0";
		}
	}
}

$init = new Action();
switch ($act) {
	case 'get-table':
		$init->getTable("select * from $table");
		break;
	case 'get-product':
		$init->getTable("select * from category");
		break;	
	case 'get-product-detail' :
		$init->getTable("select * from category where cat_parent_ID=(select cat_id from category where cat_name='$a')");
		break;
	case 'get-item':
		$init->getTable("select * from category where cat_id='$a'");
		break;
	case 'get-size':
		$init->getTable("select sizes from category where cat_id='$a'");
		break;
	case 'get-color':
		$init->getTable("select * from available_color where cat_id='$a'");
		break;
	case 'get-opt-image':
		$init->getTable("select * from available_image where cat_id='$a'");
		break;
	case 'get-event':
		$init->getTable("select * from event order by date_add desc limit 5");
		break;
	case 'get-dist':
		$init->getTable("select * from distributor");
		break;
	case 'get-contact':
		$init->getTable("select * from cms");
		break;
	case 'get-recent':
		$init->getTable("select * from order_detail a left join category on a.item_id=category.cat_id order by a.date_add desc limit 3");
		break;
	case 'get-best':
		$init->getTable("select * from category where cat_parent_ID<>0 limit 4");
		break;
	case 'get-newest':
		$init->getTable("select * from category where cat_parent_ID<>0 order by date_add desc limit 4");
		break;
	case 'get-product-list':
		$init->getTable("select * from category where cat_parent_ID<>0");
		break;
	case 'post-message':
		$init->postTable("insert into message values('','$a','$b','$c','$d','$e',now())");
		break;
	case 'get-login':
		$init->getLogin("select * from user where username='$a' and password='$b'",$a);
		break;
	case 'get-gallery':
		$init->getTable("select * from gallery");
		break;
	case 'get-search-product':
		$init->getTable("select * from category where cat_name like '%$a%' and cat_parent_ID <> 0 or cat_detail like '%$a%'");
		break;
	case 'get-search-event':
		$init->getTable("select * from event where name like '%$a%' or detail like '%$a%'");
		break;
	case 'get-bank':
		$init->getTable("select * from payment order by id");
		break;
	case 'get-link' :
		$init->getTable("select * from link order by date_add desc");
		break;
	case 'save-order':
		$init->postTable("insert into order_detail values('','$a','$b','$c','$d','$e','$f','$g','$h','$i','$j','$k','$l',now())");
		break;
	case 'get-event-detail' :
		$init->getTable("select * from event where id='$a'");
		break;
	case 'get-logo' :
		$init->getTable("select * from logo");
		break;
	case 'save-confirm':
		$init->postTable("insert into billing values('','$a','$b',now());");
		$init->postTable("update order_detail set status='1' where cust_id='$a';");
		break;
	default:
		# code...
		break;
}
