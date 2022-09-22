CREATE DATABASE  IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `aid` int NOT NULL AUTO_INCREMENT,
  `adate` date NOT NULL,
  `atimeslot` varchar(45) NOT NULL,
  `asymptoms` varchar(75) NOT NULL,
  `pid` int DEFAULT NULL,
  `did` int DEFAULT NULL,
  PRIMARY KEY (`aid`),
  KEY `d_id_idx` (`did`),
  KEY `p_id_idx` (`pid`),
  CONSTRAINT `d_id` FOREIGN KEY (`did`) REFERENCES `doctor` (`did`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `p_id` FOREIGN KEY (`pid`) REFERENCES `patient` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=424 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--



--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `did` int NOT NULL AUTO_INCREMENT,
  `deducation` varchar(45) NOT NULL,
  `dspeciality` varchar(45) NOT NULL,
  `sid` int DEFAULT NULL,
  PRIMARY KEY (`did`),
  KEY `s_id_idx` (`sid`),
  CONSTRAINT `s_id` FOREIGN KEY (`sid`) REFERENCES `staff` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (206,'bhms','dentist',111),(207,'MD','pediatrician',112),(208,'MBBS','neurologist',113),(210,'Ms','Surgon',121),(211,'MS','Neuro Surgon',123),(213,'MBBS','Cardiologist',128),(214,'MS','Psychiatrists',132),(216,'BHMS','Homeopathy',136),(217,'MBBS','Cardiologist',137);
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `iid` int NOT NULL AUTO_INCREMENT,
  `idate` date DEFAULT NULL,
  `imedicinefees` double DEFAULT NULL,
  `idoctorfees` double DEFAULT NULL,
  `ilabtestfees` double DEFAULT NULL,
  `iotherfees` double DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `aid` int DEFAULT NULL,
  PRIMARY KEY (`iid`),
  KEY `a_id_idx` (`aid`),
  CONSTRAINT `a_id` FOREIGN KEY (`aid`) REFERENCES `appointment` (`aid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=522 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--


--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `pid` int DEFAULT NULL,
  `sid` int DEFAULT NULL,
  `did` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid_idx` (`pid`),
  KEY `sid_idx` (`sid`),
  KEY `did_idx` (`did`),
  CONSTRAINT `did` FOREIGN KEY (`did`) REFERENCES `doctor` (`did`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `pid` FOREIGN KEY (`pid`) REFERENCES `patient` (`pid`),
  CONSTRAINT `sid` FOREIGN KEY (`sid`) REFERENCES `staff` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (36,'diya@gmail.com','$2a$10$AkssMOAFYtwK1.5y40wYruVvP.zDJSngW37CIbkESCD4BacnZqjlC','doctor',NULL,NULL,206),(37,'manohar@gmail.com','$2a$10$V9bOjoczXcNCpNU5sQm.8eu/mIkKgLw71w4lDOiWbMzVuiY48FFCa','doctor',NULL,NULL,207),(38,'mrunal@gmail.com','$2a$10$JSatoJKgtEOeuw1MnsN.KOVpnNsLQPtkOS/NuKaque9l6Gzqf61.y','doctor',NULL,NULL,208),(39,'receptionist@gmail.com','$2a$10$MxupaPaTK7BTzhrNs5IyaeMg8H3/VdfpSz4hvVNheN/95IoO86Xl2','receptionist',NULL,114,NULL),(40,'admin@gmail.com','$2a$10$hMn0oaGGsg9cTcMtb2KDhOa8BjH0b/eelj7LJAWVi3CC34oq5G4/m','admin',NULL,115,NULL),(42,'pallavi@gmail.com','$2a$10$vwCeVtiRrYhNrU6M7g2ESOU1TqIQrYXGVUS3ruJmRXfHc4CxM3z7W','receptionist',NULL,117,NULL),(43,'madhuri@gmail.com','$2a$10$H0rZ0nJTLFgW13Aq44zJ0OE9mYHWSXJN6a2NNoM9oTV2VzjtddrAa','nurse',NULL,118,NULL),(44,'patient@gmail.com','$2a$10$LyX5smcWnexeQj1UUBL2FedwFEEBZbTCdOyecVGtgX3xGyA0eoVyq','patient',302,NULL,NULL),(45,'madhusudhan@gmail.com','$2a$10$n9mj7rH913xpvEiSm80vQOZJAI9aspTJNjFdCudXCFQWeXCaznd8q','patient',303,NULL,NULL),(46,'meet@gmail.com','$2a$10$sJSzwkP43R.yi24nhwckKOZ0UiX2VjCXNZ94xNZIcwg4Fz/JF5hX.','patient',304,NULL,NULL),(47,'maneshubham@gmail.com','$2a$10$LGCrkc7Ux16SlUtxi.c3durKaJn/6U4sob/fNy3PjMAq0hwH/A3nS','patient',305,NULL,NULL),(48,'monika@gmail.com','$2a$10$ShQPkTxjLZsdgm2wF0EhQ.WpV5Ujhs3dqBiGrmCORAeMvlV3tSbaS','patient',306,NULL,NULL),(49,'dhanashree@gmail.com','$2a$10$gL3YRxpikruOUH5IaIK9duotgMfBtfqHSacz3MAsCJokBSeoahAwO','patient',307,NULL,NULL),(52,'vishal@gmail.com','$2a$10$g8.Ud2FNSPGhPE5kGr6HuuQbCVnk7PBDOjvAWR.O.AQ8IDe.W3s4.','doctor',NULL,NULL,210),(54,'ramdev@gmail.com','$2a$10$pyhQ7/ybiu8TjfTEeLeb3efLZxciOXrYeTKU2p6Pc0njAdQk3ZH0.','doctor',NULL,NULL,211),(55,'ujjwala@gmail.com','$2a$10$8wqQ1Zc2N.QrxHf8fx.OiOO6PRK3nJXPuv.T3g9dEKOeIBksHUxdG','patient',308,NULL,NULL),(56,'shekhar@gmail.com','$2a$10$DEu1pN7MpLiV3ONiWZqesuJKx/9TE/PCB4w7.Zgys.1oTN4gDozxu','patient',309,NULL,NULL),(57,'fazalt@gmail.com','$2a$10$S6U38AwUOXj0lqmwtdjp.uoUVbahYiAGAcvea3Q7hE21JFLvyIQLS','patient',310,NULL,NULL),(58,'sahira@gmail.com','$2a$10$mzhVh3rV3nK1brY.ZJJTnencB5g1MSvv9CSVELNdQQohoRwHyE5Su','patient',311,NULL,NULL),(59,'mat@gmail.com','$2a$10$KvDT/ToJwbKp2og7or3vtO4c06jdGmvkp.BFL2g9r/u6ivMjO84A6','patient',312,NULL,NULL),(61,'manoj@gmail.com','$2a$10$4MvlBxPeHbw4FR.Xdw5SLOOSKN4G.WCJOMFbbipb9A9GM9.0N4TOi','patient',313,NULL,NULL),(64,'gaurav@gmail.com','$2a$10$g3yEyRBJZS.jiFALaM5Ec..9m5SUAJSSDSDqPg3.Wwt.GdKwCCZz6','patient',314,NULL,NULL),(65,'yogesh@gmail.com','$2a$10$bNXhTY4.OPAFbR3a2xziCu68st3WPonH4OXhYQCRz/R4MvjzDy/FS','patient',315,NULL,NULL),(66,'harshada@gmail.com','$2a$10$hmmb3CeVnqSVFBYnp4n29eOR.6dDx1eWCQJo9rAYa03dR.4IZOUaq','patient',316,NULL,NULL),(67,'nikita@gmail.com','$2a$10$4tj6e2eBY/H1lLBOkKgPD.1jELb4as.ZeszBBRUAK.H9zDxQPw8U.','patient',317,NULL,NULL),(68,'meera@gmail.com','$2a$10$NOFDBIqGuNSI/BoQV6obFeMwSw5wRb80KHsUBre0koJkNNT1GC.WW','nurse',NULL,127,NULL),(69,'pranali@gmail.com','$2a$10$Xi.n2K4ILuiOaWjsqACSmufvyAJVJYvL07cKmSOr/L2exyEY6S7nq','doctor',NULL,NULL,213),(70,'gandhi@gmail.com','$2a$10$KYQfvMkLcnELIAHd7c.Hf.hEpNf0T3rGqvyoLQwng6iwyjCaXiz66','patient',318,NULL,NULL),(71,'naruto@gmail.com','$2a$10$YCTnFfaeW7b.lasVwcbUhefwvNSvGuv72lKAUJ5Mjl3wswVxaJ3oe','patient',319,NULL,NULL),(72,'jayesh@gmail.com','$2a$10$8sTpK9Dx4R2cFc6pfRjxdeq4DH0ZRIEOL4elWUlCYF615i3xrJpwG','wardboy',NULL,129,NULL),(74,'ramanujan@gmail.com','$2a$10$J9lqFHIqNzDQ75GIMoJpteNPLB5ysGwnVi3M2Orj/dKmGHTwEhVUG','doctor',NULL,NULL,214),(77,'virat@gmail.com','$2a$10$Qu5LX/LdDyQS0ybAdGL1Iuj6G59636AH.azHLm.MBO9gvLUVqFnDS','patient',320,NULL,NULL),(79,'vinit@gmail.com','$2a$10$.Ft6ON6Vm4Sl8JGdmWB.cOpflJ90lqNQ.KBCDPfhqsohqBWCfqe9y','doctor',NULL,NULL,216),(80,'vinay@gmail.com','$2a$10$aE5RATC/0FyqrQpt5fAEmeWXu0aRZXR1SdOVMLAKavToe2C6n7zuS','patient',321,NULL,NULL),(81,'mahesh@gmail.com','$2a$2a$10$oNsOTtPlv2FtJJLdaYoFgOANEfNq9HmrZYXIuUEQT8M51X3gFdxjm','patient',322,NULL,NULL),(82,'kapil@gmail.com','$2a$10$jK3VgSvDH9sqJig572vmlO8Qw4N7IQeP4VjO70EGWdQ.qohEgCEXC','patient',323,NULL,NULL),(83,'doctor@gmail.com','$2a$10$xj91VzloyO41/B9X9q6J5.agF1LTIUxmbaTp8ucJO3HIEIkQ4wLOK','doctor',NULL,NULL,217);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `pname` varchar(45) NOT NULL,
  `pgender` varchar(12) NOT NULL,
  `pdob` date NOT NULL,
  `pphone` varchar(11) NOT NULL,
  `paddress` varchar(120) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=324 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (302,'Patient','female','2018-06-18','9631478521','Vadgaon'),(303,'Madhusudhan Wankhede','Male','1996-01-15','4654541','Amaravati'),(304,'Meet Parmar','Male','2009-01-08','79864654','Satara'),(305,'Shubham Mane','Male','2017-06-14','9845413','kolhapure'),(306,'Monika Kumbhar','female','1998-02-17','86846413','karad'),(307,'Dhanashree Wagh','female','1998-09-30','7465454','Nashik'),(308,'ujjwala mahajan','female','1995-01-10','9865324178','Jalgaon'),(309,'Shekhar Gujar','Male','1973-04-17','7523698410','Bhopal'),(310,'Fazal Sayyad','Male','1998-06-05','7412589630','Kharghar'),(311,'Sahira Ali','female','2006-02-12','8978945457','bandra'),(312,'Mat Damon','Male','1888-06-05','4561238','USA'),(313,'Manoj Pawar','male','1970-01-17','789456','buldhana'),(314,'Gaurav Jawale','Male','2021-08-04','9632587412','Kasara'),(315,'Yogesh Zope','Male','2014-02-11','9625741365','Khote Nagar'),(316,'Harshada More','female','2012-01-04','7412589632','MuktaiNagar'),(317,'Nikita Raut','female','2015-03-10','7412365896','Jijau Nagar'),(318,'karamdas Gandhi','Male','1963-03-12','7412563289','Chikhali'),(319,'Naruto Uzumaki','Male','2015-06-29','7841545454','hidden leaf village'),(320,'Virat Kohli','Male','1998-06-12','7852364123','Mumbai'),(321,'Vinayak Sonar','Male','1998-06-13','963214585','Jalgaon'),(322,'mahesh bari','Male','2009-01-12','8963214527','Raver'),(323,'kapil dev','Male','2021-09-01','5645416549','mumbai');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `sname` varchar(60) NOT NULL,
  `sphone` varchar(11) NOT NULL,
  `sgender` varchar(15) NOT NULL,
  `saddress` varchar(60) NOT NULL,
  `sdob` date NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (111,'Divya Patel','89966559','female','Delhi','1996-05-08'),(112,'Manohar Thakur','78954565','Male','Akola','1975-06-09'),(113,'Mrunal Varma','789545663','female','Kharghar','1991-12-30'),(114,'receptionist','7984656','female','Kalyan','1995-01-31'),(115,'admin','9863241753','Male','Kankavali','1998-09-17'),(117,'Pallavi Chaudhari','786454156','female','Dombivali','1991-03-06'),(118,'Madhuri Nehte','765454646','female','vasai','1994-07-13'),(121,'Vishal Rana','7988465465','Male','vasai','1994-02-08'),(123,'Ramdev Shreevastav','8963254178','Male','Bandra','1978-12-13'),(127,'Meera Patel','9632145785','female','Kalawa','2021-08-24'),(128,'Pranali Mahajan','9632541278','female','Soygav','1993-05-11'),(129,'Jayesh Dasnurkar','9654412384','Male','Pimprala','1998-05-04'),(132,'Ramanujan Kalkey','7768834134','Male','kalkutta','1983-03-12'),(136,'Vinit Patil','7231456320','Male','Nalasopara','1991-09-03'),(137,'Doctor ','7945463465','Male','mumbai','1996-01-08');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19 19:58:24
