# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.44)
# Database: zidapparel
# Generation Time: 2017-12-20 02:06:19 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table available_color
# ------------------------------------------------------------

DROP TABLE IF EXISTS `available_color`;

CREATE TABLE `available_color` (
  `cat_col_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cat_col_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `color` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `image` varchar(255) DEFAULT NULL,
  `cat_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`cat_col_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `available_color` WRITE;
/*!40000 ALTER TABLE `available_color` DISABLE KEYS */;

INSERT INTO `available_color` (`cat_col_id`, `cat_col_name`, `color`, `image`, `cat_id`, `status`, `date_add`)
VALUES
	(3,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',25767,0,'2015-04-24 14:17:04'),
	(4,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',80689,0,'2015-04-24 14:17:27'),
	(5,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',75480,0,'2015-04-24 14:17:37'),
	(6,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',79164,0,'2015-04-24 14:17:38'),
	(7,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',97842,0,'2015-04-24 14:17:38'),
	(8,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',68704,0,'2015-04-24 14:17:38'),
	(9,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',89440,0,'2015-04-24 14:17:38'),
	(10,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',82087,0,'2015-04-24 14:17:39'),
	(11,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',67911,0,'2015-04-24 14:17:39'),
	(12,'hXGZz','hXGZz','assets/img/product/2407/5 day 1.jpg',34863,0,'2015-04-24 14:17:40'),
	(13,'SrjEe','SrjEe','assets/img/product/5249/iqra1.jpg',16711,0,'2015-04-24 20:58:19'),
	(14,'SrjEe','SrjEe','assets/img/product/5249/iqra1.jpg',45068,0,'2015-04-24 20:58:31'),
	(15,'#000000','#000000','assets/img/product/8711/iqra1.jpg',48510,0,'2015-04-24 21:02:10'),
	(16,'#000000','#000000','assets/img/product/8711/iqra1.jpg',50290,0,'2015-04-24 21:02:15'),
	(17,'#000000','#000000','assets/img/product/8711/iqra1.jpg',5845,0,'2015-04-24 21:02:40'),
	(18,'#000000','#000000','assets/img/product/8711/iqra1.jpg',77294,0,'2015-04-24 21:02:41'),
	(19,'#000000','#000000','assets/img/product/8711/iqra1.jpg',92978,0,'2015-04-24 21:02:42'),
	(20,'#000000','#000000','assets/img/product/8711/iqra1.jpg',95844,0,'2015-04-24 21:02:43'),
	(21,'zxKzb','zxKzb','assets/img/product/9971/iqra1.jpg',16226,0,'2015-04-24 21:06:39'),
	(22,'cgEmW','cgEmW','assets/img/product/1727/iqra1.jpg',10171,0,'2015-04-24 21:09:00'),
	(23,'#000000','#000000','assets/img/product/4234/iqra.jpg',34056,0,'2015-04-24 21:11:14'),
	(24,'#000000','#000000','assets/img/product/4234/iqra.jpg',15327,0,'2015-04-24 21:11:15'),
	(25,'#ff003d','#ff003d','assets/img/product/3908/11160389_676010992503303_759565310_n.jpg',79565,0,'2015-04-24 22:05:39'),
	(26,'#0d64b5','#0d64b5','assets/img/product/3908/11160389_676010992503303_759565310_n-2.jpg',79565,0,'2015-04-24 22:05:40'),
	(27,'#3300ff','#3300ff','assets/img/product/5535/iqra.jpg',81395,0,'2015-04-24 22:07:45'),
	(28,'#3300ff','#3300ff','assets/img/product/5535/iqra.jpg',98717,0,'2015-04-24 22:07:47'),
	(29,'#260b96','#260b96','assets/img/product/5535/iqra.jpg',4921,0,'2015-04-24 22:08:07'),
	(30,'#260b96','#260b96','assets/img/product/5535/iqra.jpg',78639,0,'2015-04-24 22:08:16'),
	(31,'#0a2863','#0a2863','assets/img/product/5973/iqra1.jpg',96212,0,'2015-04-24 22:11:10'),
	(33,'82971','82971','#153c82',0,0,'2015-04-25 05:47:04'),
	(34,'82971','82971','#153c82',0,0,'2015-04-25 05:47:08'),
	(35,'82971','82971','#153c82',0,0,'2015-04-25 05:47:09'),
	(36,'82971','82971','#c7ced6',0,0,'2015-04-25 05:51:33'),
	(38,'jPqHr','jPqHr','assets/img/product/8450/brother n sister 2.jpg',81287,0,'2015-04-25 05:58:16'),
	(41,'Kgyyq','Kgyyq','assets/img/product/8450/brother and sister.jpg',81287,0,'2015-04-25 05:58:17'),
	(42,'#bec7d1','#bec7d1','assets/img/product/6692/brother n sister 2.jpg',74903,0,'2015-04-25 07:07:16'),
	(43,'74903','74903','#0b4485',0,0,'2015-04-25 07:08:43'),
	(44,'#07277a','#07277a','assets/img/product/6192/brother and sister.jpg',74903,0,'2015-04-25 07:12:09'),
	(47,'#102154','#102154','assets/img/product/8401/iqra1.jpg',98846,0,'2015-04-25 08:21:45'),
	(48,'#b4b8c2','#b4b8c2','assets/img/product/8401/iqra2.jpg',98846,0,'2015-04-25 08:21:45'),
	(49,'JsAVU','JsAVU','assets/img/product/5923/everyday 2.jpg',39795,0,'2015-04-25 08:25:10'),
	(50,'QzvfP','QzvfP','assets/img/product/5923/everyday muslim1.jpg',39795,0,'2015-04-25 08:25:11'),
	(51,'QzvfP','QzvfP','assets/img/product/5923/everyday muslim1.jpg',1189,0,'2015-04-25 08:25:23'),
	(52,'JsAVU','JsAVU','assets/img/product/5923/everyday 2.jpg',1189,0,'2015-04-25 08:25:24'),
	(53,'OMHlA','OMHlA','assets/img/product/5424/everyday muslim1.jpg',44619,0,'2015-04-25 08:27:36'),
	(54,'jGaku','jGaku','assets/img/product/5424/everyday 2.jpg',44619,0,'2015-04-25 08:27:37'),
	(55,'OMHlA','OMHlA','assets/img/product/5424/everyday muslim1.jpg',41256,0,'2015-04-25 08:27:38'),
	(56,'jGaku','jGaku','assets/img/product/5424/everyday 2.jpg',41256,0,'2015-04-25 08:27:39'),
	(59,'#fcfeff','#fcfeff','assets/img/product/4007/everyday muslim1.jpg',2248,0,'2015-04-25 08:29:50'),
	(60,'#072766','#072766','assets/img/product/4007/everyday 2.jpg',2248,0,'2015-04-25 08:29:51'),
	(61,'#aeb5c2','#aeb5c2','assets/img/product/4213/islam my faith1.jpg',98655,0,'2015-04-25 08:32:43'),
	(62,'#051d4d','#051d4d','assets/img/product/4213/islam my faith2.jpg',98655,0,'2015-04-25 08:32:43'),
	(63,'#020203','#020203','assets/img/product/4213/keep istiqomah 1.jpg',81092,0,'2015-04-25 08:36:36'),
	(64,'#c0c0cc','#c0c0cc','assets/img/product/4213/keep istiqomah 2.jpg',81092,0,'2015-04-25 08:36:36'),
	(65,'#f7f7ff','#f7f7ff','assets/img/product/4213/fundamentalis.jpg',87363,0,'2015-04-25 08:40:19'),
	(66,'#000000','#000000','assets/img/product/4213/fundamentalis 2.jpg',87363,0,'2015-04-25 08:40:19'),
	(67,'XkkDQ','XkkDQ','assets/img/product/3443/prayer 1.jpg',41554,0,'2015-04-25 08:43:49'),
	(68,'WEIXs','WEIXs','assets/img/product/3443/prayer 2.jpg',41554,0,'2015-04-25 08:43:49'),
	(73,'#edeff5','#edeff5','assets/img/product/1016/5 day 2.jpg',8946,0,'2015-04-25 08:59:04'),
	(74,'#05124d','#05124d','assets/img/product/1016/5 day 1.jpg',8946,0,'2015-04-25 08:59:04'),
	(75,'#032454','#032454','assets/img/product/4171/grow beard.jpg',83300,0,'2015-04-25 09:34:43'),
	(76,'#000000','#000000','assets/img/product/4171/grow beard1.jpg',83300,0,'2015-04-25 09:34:43'),
	(77,'#ffffff','#ffffff','assets/img/product/4171/recharge iman 2.jpg',1277,0,'2015-04-25 09:38:37'),
	(78,'#d6d2d2','#d6d2d2','assets/img/product/2806/zid 1.jpg',53763,0,'2015-04-25 09:39:39'),
	(79,'#050505','#050505','assets/img/product/2806/zid 2.jpg',53763,0,'2015-04-25 09:39:39'),
	(80,'#f5f2f2','#f5f2f2','assets/img/product/746/recharge iman 2.jpg',4341,0,'2015-04-25 09:40:41'),
	(81,'#f5f2f2','#f5f2f2','assets/img/product/746/recharge iman 2.jpg',38560,0,'2015-04-25 09:40:42'),
	(82,'#f5f2f2','#f5f2f2','assets/img/product/746/recharge iman 2.jpg',45048,0,'2015-04-25 09:40:53'),
	(83,'illPv','illPv','assets/img/product/5052/stay muslim 1.jpg',7058,0,'2015-04-25 09:42:52'),
	(84,'jDLWu','jDLWu','assets/img/product/5052/stay muslim 2.jpg',7058,0,'2015-04-25 09:42:52'),
	(85,'#fcf5f5','#fcf5f5','assets/img/product/5090/recharge iman 2.jpg',66426,0,'2015-04-25 09:49:38'),
	(86,'#092954','#092954','assets/img/product/3657/prayer 1.jpg',952,0,'2015-04-25 09:51:35'),
	(87,'#000000','#000000','assets/img/product/3657/prayer 2.jpg',952,0,'2015-04-25 09:51:37'),
	(88,'#dbd7d7','#dbd7d7','assets/img/product/1595/quran is your way 2.jpg',46896,0,'2015-04-25 09:57:15'),
	(89,'#ffffff','#ffffff','assets/img/product/1595/quran is your way 1.jpg',46896,0,'2015-04-25 09:57:16'),
	(90,'#061b45','#061b45','assets/img/product/1595/doa 2.jpg',67364,0,'2015-04-25 09:58:55'),
	(92,'#fcfdff','#fcfdff','assets/img/product/1595/recharge iman 2.jpg',92128,0,'2015-04-25 09:59:49'),
	(93,'#000000','#000000','assets/img/product/1595/recharge quRan1.jpg',92128,0,'2015-04-25 09:59:49'),
	(94,'#000000','#000000','assets/img/product/8785/prayer 1.jpg',85758,0,'2015-04-25 21:35:00'),
	(95,'#000000','#000000','assets/img/product/7865/prayer 2.jpg',85758,0,'2015-04-25 21:36:31'),
	(96,'#000000','#000000','assets/img/product/4806/Screen Shot 2015-04-23 at 1.15.18 AM.png',595,0,'2015-04-27 05:07:35'),
	(97,'#ffb800','#ffb800','assets/img/product/4806/Screen Shot 2015-04-23 at 1.15.06 AM.png',595,0,'2015-04-27 05:07:36'),
	(98,'#071854','#071854','assets/img/product/230/prayer 1.jpg',56500,0,'2015-04-28 23:05:07'),
	(99,'#000000','#000000','assets/img/product/230/prayer 2.jpg',56500,0,'2015-04-28 23:05:07'),
	(100,'#d4c9c9','#d4c9c9','assets/img/product/295/stay muslim 2.jpg',43651,0,'2015-04-28 23:08:25'),
	(101,'#fcfcfc','#fcfcfc','assets/img/product/295/stay muslim 1.jpg',43651,0,'2015-04-28 23:08:26'),
	(102,'#f2eded','#f2eded','assets/img/product/4807/doa 1.jpg',67364,0,'2015-04-28 23:15:44');

/*!40000 ALTER TABLE `available_color` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table available_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `available_image`;

CREATE TABLE `available_image` (
  `cat_col_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `cat_id` int(11) NOT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`cat_col_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `available_image` WRITE;
/*!40000 ALTER TABLE `available_image` DISABLE KEYS */;

INSERT INTO `available_image` (`cat_col_id`, `image`, `cat_id`, `date_add`)
VALUES
	(4,'assets/img/product/4920/untitled.png',97326,'2015-04-27 02:42:18'),
	(5,'assets/img/product/3907/Screen Shot 2015-04-23 at 1.15.06 AM.png',40317,'2015-04-27 02:44:13'),
	(6,'assets/img/product/3907/Screen Shot 2015-04-23 at 1.15.06 AM.png',32482,'2015-04-27 02:45:37'),
	(7,'assets/img/product/2626/Screen Shot 2015-04-23 at 1.15.18 AM.png',87310,'2015-04-27 02:48:04'),
	(8,'assets/img/product/8911/Screen Shot 2015-04-24 at 9.57.05 PM.png',87310,'2015-04-27 02:48:55'),
	(9,'assets/img/product/4806/Screen Shot 2015-04-24 at 2.25.55 PM.png',595,'2015-04-27 05:07:35'),
	(10,'assets/img/product/4806/Screen Shot 2015-04-24 at 9.57.05 PM.png',595,'2015-04-27 05:07:36');

/*!40000 ALTER TABLE `available_image` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table available_size
# ------------------------------------------------------------

DROP TABLE IF EXISTS `available_size`;

CREATE TABLE `available_size` (
  `cat_size_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `size` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cat_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`cat_size_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table billing
# ------------------------------------------------------------

DROP TABLE IF EXISTS `billing`;

CREATE TABLE `billing` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_add` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `billing` WRITE;
/*!40000 ALTER TABLE `billing` DISABLE KEYS */;

INSERT INTO `billing` (`id`, `order_id`, `image`, `date_add`)
VALUES
	(1,3032,'assets/img/public/9412/Screen Shot 2015-04-23 at 12.27.53 PM.png','2015-04-27 04:16:06'),
	(2,3032,'assets/img/public/89465/Screen Shot 2015-04-23 at 12.27.53 PM.png','2015-04-27 04:19:12'),
	(3,8016,'assets/img/public/37577/Screen Shot 2015-04-24 at 2.25.55 PM.png','2015-04-27 05:12:00');

/*!40000 ALTER TABLE `billing` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_parent_ID` int(11) NOT NULL,
  `cat_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cat_detail` text,
  `price` double DEFAULT NULL,
  `cat_image` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `sizes` varchar(255) DEFAULT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`cat_id`, `cat_parent_ID`, `cat_name`, `cat_detail`, `price`, `cat_image`, `status`, `sizes`, `date_add`)
VALUES
	(2248,81192,'EVERYDAY I AM MUSLIM','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4007/everyday muslim1.jpg',0,'S,M,L,XL','2015-04-25 08:29:50'),
	(8946,81192,'5 DAY','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/1016/5 day 1.jpg',0,'S,M,L,XL','2015-04-25 08:59:03'),
	(43651,81192,'STAY MUSLIM','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/295/stay muslim 1.jpg',0,'S,M,L,XL','2015-04-28 23:08:25'),
	(46896,81192,'QURAN IS YOUR WAY','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/1595/quran is your way 1.jpg',0,'S,M,L,XL','2015-04-25 09:57:14'),
	(53763,81192,'ZID','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/2806/zid 1.jpg',0,'S,M,L,XL','2015-04-25 09:39:38'),
	(56500,81192,'PRAYER','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/230/prayer 1.jpg',0,'S,M,L,XL','2015-04-28 23:05:06'),
	(67364,81192,'DOA','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4807/doa 1.jpg',0,'S,M,L,XL','2015-04-25 09:58:54'),
	(74903,81192,'BROTHER N SISTER','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/6192/brother and sister.jpg',0,'S,M,L,XL','2015-04-25 05:58:16'),
	(81092,81192,'KEEP ISTIQOMAH','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4213/keep istiqomah 1.jpg',0,'S,M,L,XL','2015-04-25 08:36:35'),
	(81192,0,'T-SHIRT',NULL,NULL,'',0,'','2015-04-24 14:13:51'),
	(83300,81192,'GROW BEARD','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4171/grow beard.jpg',0,'S,M,L,XL','2015-04-25 09:34:42'),
	(87363,81192,'MUSLIM FUNDAMENTAL','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4213/fundamentalis.jpg',0,'S,M,L,XL','2015-04-25 08:40:18'),
	(92128,81192,'RECHARGE IMAN','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/1595/recharge iman 2.jpg',0,'S,M,L,XL','2015-04-25 09:59:48'),
	(98655,81192,'ISLAM MY FAITH','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/4213/islam my faith1.jpg',0,'S,M,L,XL','2015-04-25 08:32:42'),
	(98846,81192,'IQRA','SLIMFIT , FULL COTTON 30s, SABLON PLASTISOL (FREE ONGKIR UNTUK PULAU JAWA)',120000,'assets/img/product/8401/iqra1.jpg',0,'S,M,L,XL','2015-04-25 08:21:44');

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category_options
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category_options`;

CREATE TABLE `category_options` (
  `cat_opt_id` int(11) NOT NULL DEFAULT '0',
  `cat_opt_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cat_opt_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT 'options,fabric,size,pricings',
  `price` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cat_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `category_options` WRITE;
/*!40000 ALTER TABLE `category_options` DISABLE KEYS */;

INSERT INTO `category_options` (`cat_opt_id`, `cat_opt_name`, `cat_opt_type`, `price`, `size`, `cat_id`, `status`)
VALUES
	(1,'Crew Neck','options','-','',21,1),
	(2,'V-Neck','options','2','',21,1),
	(3,'Sleeveless','options','-','',21,1),
	(20,'Crew Neck','options','-','',22,1),
	(21,'V-Neck','options','2','',22,1),
	(22,'Sleeveless','options','-','',22,1),
	(38,'Crew Neck','options','-','',23,1),
	(39,'V-Neck','options','2','',23,1),
	(40,'Sleeveless','options','-','',23,1),
	(41,'Cap Sleeves','options','-','',23,1),
	(56,'3&quot; Side Stripe','options','5','',24,1),
	(57,'Black Pockets - Open','options','-','',24,1),
	(58,'Black Pockets - Flap','options','5','',24,1),
	(59,'Length Adjustment','options','5','',24,1),
	(70,'Curved Bottom','options','3','',25,1),
	(71,'Breast Pocket','options','5','',25,1),
	(72,'Long Sleeves','options','5','',25,1);

/*!40000 ALTER TABLE `category_options` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table cms
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cms`;

CREATE TABLE `cms` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(32) DEFAULT NULL,
  `detail` text,
  `quote` text,
  `bill` text NOT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `cms` WRITE;
/*!40000 ALTER TABLE `cms` DISABLE KEYS */;

INSERT INTO `cms` (`id`, `name`, `phone`, `detail`, `quote`, `bill`, `date_add`)
VALUES
	(37,'ZID APPAREL','085641000426','<div><span>JL.DR.CIPTO 77&#160;</span><span>Batang,&#160;</span></div><div><span>Jawa Tengah&#160;</span><span>Indonesia&#160;</span></div><div><span></span><span>POSTCODE 51211</span></div><div><span>Email : zidapparel@gmail.com</span></div><div><span>Blackberry : 74909B78</span></div><div><span><br/></span></div>','<h3><b>Exclusive Muslim Clothing Concept</b></h3>','<h4>KONFIRMASI PEMBAYARAN - CARA BELI</h4>\r\n<ol>\r\n	<li>Pilih Product yang akan ada beli&nbsp;</li>\r\n	<li>pilih detailnya dengan Click Size  -  Click - Colour - Click Buy</li>\r\n	<li>Anda akan mendapatkan bill</li>\r\n	<li>Jika ingin menambahkan banyaknya barang isi bill tersebut. jangan lupa copy ID ORDERKONFIRMASI PEMBAYARAN DENGAN WEB</li>\r\n	<li>Upload foto Bukti Transfer anda.&nbsp;</li>\r\n	<li>Isikan ID ORDER Lalu tekan SUMMIT</li>\r\n	<li>KONFIRMASI PEMBAYARAN DENGAN SMS</li>\r\n	<li>KETIK SMS DENGAN FORMATID ORDER # BANK # NAMA PENGIRIM KIRIM KE 085641000426</li>\r\n	<li>CONTOH : 7834 #  BCA # SAEFUDIN<br></li>\r\n</ol>','2015-04-29 16:06:52');

/*!40000 ALTER TABLE `cms` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table distributor
# ------------------------------------------------------------

DROP TABLE IF EXISTS `distributor`;

CREATE TABLE `distributor` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `image` text,
  `detail` text,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `distributor` WRITE;
/*!40000 ALTER TABLE `distributor` DISABLE KEYS */;

INSERT INTO `distributor` (`id`, `image`, `detail`, `date_add`)
VALUES
	(1,NULL,'<h1>Lorem ipsum dolor sit amet, sapien</h1><ol><li>&#160;etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac.&#160;</li><li>Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.Nulla wisi laoreet suspendisse hendrerit facilisi, mi mattis pariatur adipiscing aliquam phare</li><li>tra eget. Aenean urna ipsum donec tellus tincidunt, quam curabitur metus, pretium pu</li><li>rus facilisis enimd</li></ol>',NULL);

/*!40000 ALTER TABLE `distributor` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table event
# ------------------------------------------------------------

DROP TABLE IF EXISTS `event`;

CREATE TABLE `event` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `detail` text,
  `source` text,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table gallery
# ------------------------------------------------------------

DROP TABLE IF EXISTS `gallery`;

CREATE TABLE `gallery` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `date_add` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;

INSERT INTO `gallery` (`id`, `image`, `date_add`)
VALUES
	(12,'assets/img/3.jpg','2015-04-24 13:19:52'),
	(13,'assets/img/4.jpg','2015-04-24 13:24:28'),
	(14,'assets/img/IMG_9085.JPG','2017-12-20 09:03:06');

/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table link
# ------------------------------------------------------------

DROP TABLE IF EXISTS `link`;

CREATE TABLE `link` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `link` WRITE;
/*!40000 ALTER TABLE `link` DISABLE KEYS */;

INSERT INTO `link` (`id`, `name`, `link`, `image`, `date_add`)
VALUES
	(18,'login','#/login','assets/img/lock.png','2000-04-15 15:42:49'),
	(21,'Twitter','www.twitter.com','assets/img/twitter.png','2015-04-19 23:59:04'),
	(22,'Youtube','www.youtube.com','assets/img/youtube.png','2015-04-20 00:01:35'),
	(24,'Instagramn','www.instagram.com','assets/img/instragram.png','2015-04-21 13:54:28'),
	(25,'Facebook','https://www.facebook.com/ZIDAPPAREL','assets/img/facebook.png','2015-04-29 00:16:52');

/*!40000 ALTER TABLE `link` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table logo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `logo`;

CREATE TABLE `logo` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `logo_1` varchar(255) DEFAULT NULL,
  `logo_2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `logo` WRITE;
/*!40000 ALTER TABLE `logo` DISABLE KEYS */;

INSERT INTO `logo` (`id`, `logo_1`, `logo_2`)
VALUES
	(1,'assets/img/Logo 1.png','assets/img/logo 2.png');

/*!40000 ALTER TABLE `logo` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table menu
# ------------------------------------------------------------

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;

INSERT INTO `menu` (`id`, `value`, `url`, `date_add`)
VALUES
	(1,'Home','#home','0000-00-00 00:00:00'),
	(2,'Product','#product','0000-00-00 00:00:00'),
	(3,'Event','#event','0000-00-00 00:00:00'),
	(4,'Distributor','#distributor','0000-00-00 00:00:00'),
	(5,'Contact','#contact','0000-00-00 00:00:00'),
	(6,'BIll Confirm','#confirm','0000-00-00 00:00:00'),
	(7,'Login','#login','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table message
# ------------------------------------------------------------

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT '',
  `phone` varchar(16) DEFAULT '',
  `sosial_id` text,
  `message` text,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `detail` text,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table order_detail
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_detail`;

CREATE TABLE `order_detail` (
  `id` int(128) NOT NULL AUTO_INCREMENT,
  `cust_id` int(128) NOT NULL,
  `item_id` varchar(64) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(32) DEFAULT NULL,
  `email_address` varchar(128) DEFAULT NULL,
  `address` text,
  `client_notes` longtext,
  `status` enum('0','1') DEFAULT '0',
  `total_order` int(32) DEFAULT NULL,
  `total_price` int(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(8) NOT NULL,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cust_id` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table payment
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `bank` varchar(255) DEFAULT NULL,
  `rek` varchar(255) DEFAULT '',
  `image` text,
  `date_add` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;

INSERT INTO `payment` (`id`, `bank`, `rek`, `image`, `date_add`)
VALUES
	(11,'BCA','2490253681','assets/img/bca.png','2015-04-24 13:45:37'),
	(12,'BNI','','assets/img/bni.png','2015-04-24 13:46:05');

/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table statistic
# ------------------------------------------------------------

DROP TABLE IF EXISTS `statistic`;

CREATE TABLE `statistic` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `ip` varchar(64) DEFAULT NULL,
  `os` varchar(64) DEFAULT NULL,
  `browser` varchar(64) DEFAULT NULL,
  `date_add` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ip` (`ip`),
  KEY `date_add` (`date_add`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `statistic` WRITE;
/*!40000 ALTER TABLE `statistic` DISABLE KEYS */;

INSERT INTO `statistic` (`id`, `ip`, `os`, `browser`, `date_add`)
VALUES
	(3,'::1','Mac OS X','Safari','2015-04-27'),
	(4,'202.67.41.51','Mac OS X','Safari','2015-04-27'),
	(5,'146.185.28.62','Mac OS X','Firefox','2015-04-27'),
	(7,'36.73.14.2','Windows 7','Firefox','2015-04-27'),
	(9,'118.96.170.99','Android','Handheld Browser','2015-04-28'),
	(17,'146.185.28.61','Mac OS X','Firefox','2015-04-29'),
	(28,'39.212.36.83','Android','Opera','2015-04-30'),
	(29,'36.80.163.27','iPhone','Handheld Browser','2015-04-30'),
	(31,'180.254.100.14','Windows 8.1','Chrome','2015-05-01'),
	(33,'202.62.16.170','Windows 7','Chrome','2015-05-01'),
	(35,'114.79.28.247','Windows 8.1','Firefox','2015-05-02');

/*!40000 ALTER TABLE `statistic` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(8) NOT NULL DEFAULT '0',
  `id_user` varchar(16) NOT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `id_user`, `firstname`, `lastname`, `username`, `password`, `status`)
VALUES
	(0,'1','admin','admin','admin','zid_77','0');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
