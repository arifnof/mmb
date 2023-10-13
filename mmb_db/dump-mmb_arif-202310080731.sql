-- MySQL dump 10.13  Distrib 5.7.39, for osx11.0 (x86_64)
--
-- Host: localhost    Database: mmb_arif
-- ------------------------------------------------------
-- Server version	5.7.39
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO,POSTGRESQL' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table "Barang"
--

DROP TABLE IF EXISTS "Barang";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Barang" (
  "id" int(11) NOT NULL,
  "nama" varchar(100) DEFAULT NULL,
  "satuan" varchar(10) DEFAULT NULL,
  "harga" int(11) DEFAULT NULL,
  "supplier_id" int(11) DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Barang"
--

LOCK TABLES "Barang" WRITE;
/*!40000 ALTER TABLE "Barang" DISABLE KEYS */;
INSERT INTO "Barang" VALUES (1000,'Kentang Impor','kg',22000,3),(1001,'baru','pcs',500,NULL),(1002,'Wortel','kg',15000,NULL),(1003,'Wortel Impor','kg',18000,NULL),(1004,'Kentang','kg',20000,3),(1005,'Telur Biasa','kg',25000,3),(1006,'Telur Omega','kg',30000,3),(1007,'Air Mineral 600ml','botol',40000,2),(1008,'Susu UHT 500ml','pcs',6000,2),(1009,'Semangka','kg',10000,1),(1010,'Jeruk','kg',20000,1);
/*!40000 ALTER TABLE "Barang" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "Log_Pegawai"
--

DROP TABLE IF EXISTS "Log_Pegawai";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Log_Pegawai" (
  "id" int(11) NOT NULL,
  "nrp" int(11) NOT NULL,
  "nama" varchar(200) DEFAULT NULL,
  "tanggal_lahir" date DEFAULT NULL,
  "jenis_kelamin" varchar(1) DEFAULT NULL,
  "tempat_tinggal" varchar(100) DEFAULT NULL,
  "gaji" int(11) DEFAULT NULL,
  "nrp_baru" int(11) NOT NULL,
  "nama_baru" varchar(200) DEFAULT NULL,
  "tanggal_lahir_baru" date DEFAULT NULL,
  "jenis_kelamin_baru" varchar(1) DEFAULT NULL,
  "tempat_tinggal_baru" varchar(100) DEFAULT NULL,
  "gaji_baru" int(11) DEFAULT NULL,
  "waktu" datetime DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Log_Pegawai"
--

LOCK TABLES "Log_Pegawai" WRITE;
/*!40000 ALTER TABLE "Log_Pegawai" DISABLE KEYS */;
INSERT INTO "Log_Pegawai" VALUES (1,202120005,'Levering Janet','2001-09-02','P','Jakarta',4901798,202120005,'Levering Janet','2001-09-02','P','Jakarta',5901798,'2023-09-02 07:39:31'),(2,202200010,'Ahmad','2003-09-02','L','Jakarta',4901798,202200010,'Ahmad','2003-09-02','L','Bandung',5401798,'2023-09-02 15:06:27'),(3,202020011,'AA BB','2005-08-09','L','Jakarta',4901798,202020011,'CC DD','1995-08-09','L','Bogor',4901798,'2023-09-09 00:14:11'),(4,202200099,'John Doe','1999-09-09','L','Bandung',5401798,202200099,'John Doe 2','2001-09-09','L','Bandung',5401798,'2023-09-09 13:57:24'),(5,20230916,'John September','2000-03-05','L','Surabaya',4500000,20230916,'John September','2000-03-05','L','Malang',4500000,'2023-09-16 12:03:47'),(6,20230916,'John September','2000-03-05','L','Malang',4500000,20230916,'John September','2000-03-05','L','Malang',5500000,'2023-09-16 12:04:22'),(7,19950202,'John Doe','1995-02-02','L','Semarang',3500000,199520002,'John Doe','1995-02-02','L','Semarang',3500000,'2023-10-08 06:04:45');
/*!40000 ALTER TABLE "Log_Pegawai" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "Log_Pelanggan"
--

DROP TABLE IF EXISTS "Log_Pelanggan";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Log_Pelanggan" (
  "id_auto" int(11) NOT NULL,
  "id" int(11) DEFAULT NULL,
  "nama" varchar(100) DEFAULT NULL,
  "alamat" varchar(200) DEFAULT NULL,
  "no_hp" varchar(20) DEFAULT NULL,
  "email" varchar(100) DEFAULT NULL,
  "nama_baru" varchar(100) DEFAULT NULL,
  "alamat_baru" varchar(200) DEFAULT NULL,
  "no_hp_baru" varchar(20) DEFAULT NULL,
  "email_baru" varchar(100) DEFAULT NULL,
  "waktu" datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id_auto")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Log_Pelanggan"
--

LOCK TABLES "Log_Pelanggan" WRITE;
/*!40000 ALTER TABLE "Log_Pelanggan" DISABLE KEYS */;
INSERT INTO "Log_Pelanggan" VALUES (1,2,'Ana Trujillo ','Depok','08121231231','anat999@gmail.com','Ana Trujillo ','Depok','08121231231','anat999@gmail.com','2023-09-23 08:52:41'),(2,2,'Ana Trujillo ','Depok','08121231231','anat999@gmail.com','Ana Trujillo ','Depok','08121231231','anat999@gmail.com','2023-09-23 08:54:48');
/*!40000 ALTER TABLE "Log_Pelanggan" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "Log_Supplier"
--

DROP TABLE IF EXISTS "Log_Supplier";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Log_Supplier" (
  "id_auto" int(11) NOT NULL,
  "id" int(11) DEFAULT NULL,
  "nama" varchar(100) DEFAULT NULL,
  "kontak_nama" varchar(100) DEFAULT NULL,
  "kota" varchar(100) DEFAULT NULL,
  "telp_no" varchar(20) DEFAULT NULL,
  "nama_baru" varchar(100) DEFAULT NULL,
  "kontak_nama_baru" varchar(100) DEFAULT NULL,
  "kota_baru" varchar(100) DEFAULT NULL,
  "telp_no_baru" varchar(20) DEFAULT NULL,
  "waktu" datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("id_auto")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Log_Supplier"
--

LOCK TABLES "Log_Supplier" WRITE;
/*!40000 ALTER TABLE "Log_Supplier" DISABLE KEYS */;
INSERT INTO "Log_Supplier" VALUES (1,3,'Waskarya','Tira','Bekasi','021867123','Waskarya','Tira2','Bekasi','021867123','2023-09-07 20:49:08'),(2,4,'Megantara 3','Putra 3','Bogor 3','0251345323','Megantara 4','Putra 4','Bogor 4','0251345324','2023-09-23 08:59:45');
/*!40000 ALTER TABLE "Log_Supplier" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "Pegawai"
--

DROP TABLE IF EXISTS "Pegawai";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Pegawai" (
  "nrp" int(11) NOT NULL,
  "nama" varchar(200) DEFAULT NULL,
  "tanggal_lahir" date DEFAULT NULL,
  "jenis_kelamin" varchar(1) DEFAULT NULL,
  "tempat_tinggal" varchar(100) DEFAULT NULL,
  "gaji" int(11) DEFAULT NULL,
  PRIMARY KEY ("nrp")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Pegawai"
--

LOCK TABLES "Pegawai" WRITE;
/*!40000 ALTER TABLE "Pegawai" DISABLE KEYS */;
INSERT INTO "Pegawai" VALUES (199520002,'John Doe','1995-02-02','L','Semarang',3500000),(202020001,'Arif Syah','1995-02-05','L','Jakarta',4901798),(202020002,'Nofyan Syah','2004-10-05','L','Depok',4694493),(202020003,'Davolio Nancy','2005-10-06','P','Jakarta',4901798),(202020004,'Fuller Andew','2004-05-05','L','Jakarta',4901798),(202120005,'Levering Janet','2001-09-02','P','Jakarta',5901798),(202120006,'Suyama Michael','2002-02-05','L','Bogor',4639429),(202120007,'Dodsworth Anne','2005-02-06','P','Bogor',4639429),(202120008,'Andy Michael','2001-02-20','L','Bandung',3492465),(202120009,'King Robert','1990-02-05','L','Bandung',3492465),(202200010,'Ahmad','2003-09-02','L','Bandung',5401798);
/*!40000 ALTER TABLE "Pegawai" ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 */ /*!50003 TRIGGER update_log_pegawai 
    BEFORE UPDATE 
    ON Pegawai
    FOR EACH ROW 
BEGIN
    INSERT INTO Log_Pegawai
	(nrp, nama, tanggal_lahir, jenis_kelamin, tempat_tinggal, gaji, 
	 nrp_baru, nama_baru, tanggal_lahir_baru, jenis_kelamin_baru, tempat_tinggal_baru, gaji_baru, waktu)
	VALUES
	(OLD.nrp, OLD.nama, OLD.tanggal_lahir, OLD.jenis_kelamin, OLD.tempat_tinggal, OLD.gaji, 
	 NEW.nrp, NEW.nama, NEW.tanggal_lahir, NEW.jenis_kelamin, NEW.tempat_tinggal, NEW.gaji, NOW());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table "Pelanggan"
--

DROP TABLE IF EXISTS "Pelanggan";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Pelanggan" (
  "id" int(11) NOT NULL,
  "nama" varchar(100) DEFAULT NULL,
  "alamat" varchar(200) DEFAULT NULL,
  "no_hp" varchar(20) DEFAULT NULL,
  "email" varchar(100) DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Pelanggan"
--

LOCK TABLES "Pelanggan" WRITE;
/*!40000 ALTER TABLE "Pelanggan" DISABLE KEYS */;
INSERT INTO "Pelanggan" VALUES (1,'Alfreds Futterkiste ','Jakarta','0813348523','alfredsf987@gmail.com'),(2,'Ana Trujillo ','Depok','08121231231','anat999@gmail.com'),(3,'Antonio Moreno ','Jakarta','08151231238','antoniom876@gmail.com'),(4,'Arnof','Bogor','0819324234','arnof@gmail.com'),(6,'Ade Trujillo ','Depok','08121231234','ade999@gmail.com');
/*!40000 ALTER TABLE "Pelanggan" ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 */ /*!50003 TRIGGER update_log_pelanggan 
    BEFORE UPDATE 
    ON Pelanggan
    FOR EACH ROW 
BEGIN
    INSERT INTO Log_Pelanggan
	(id, nama, alamat, no_hp, email, 
		nama_baru, alamat_baru, no_hp_baru, email_baru, waktu)
	VALUES
	(OLD.id, OLD.nama, OLD.alamat, OLD.no_hp, OLD.email, 
		NEW.nama, NEW.alamat, NEW.no_hp, NEW.email, NOW());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table "Pesanan"
--

DROP TABLE IF EXISTS "Pesanan";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Pesanan" (
  "id" int(11) NOT NULL,
  "pelanggan_id" varchar(100) DEFAULT NULL,
  "pegawai_nrp" varchar(100) DEFAULT NULL,
  "tanggal" date DEFAULT NULL,
  PRIMARY KEY ("id"),
  KEY "Pesanan_pelanggan_id_IDX" ("pelanggan_id"),
  KEY "Pesanan_pegawai_nrp_IDX" ("pegawai_nrp")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Pesanan"
--

LOCK TABLES "Pesanan" WRITE;
/*!40000 ALTER TABLE "Pesanan" DISABLE KEYS */;
INSERT INTO "Pesanan" VALUES (201,'1','202020002','2023-08-01'),(202,'2','202020001','2023-08-01'),(203,'1','202020001','2023-08-10'),(204,'4','202020001','2023-08-10'),(205,'3','202020001','2023-08-10');
/*!40000 ALTER TABLE "Pesanan" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "PesananDetail"
--

DROP TABLE IF EXISTS "PesananDetail";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "PesananDetail" (
  "id" int(11) NOT NULL,
  "pesanan_id" int(11) DEFAULT NULL,
  "barang_id" int(11) DEFAULT NULL,
  "kuantiti" int(11) DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "PesananDetail"
--

LOCK TABLES "PesananDetail" WRITE;
/*!40000 ALTER TABLE "PesananDetail" DISABLE KEYS */;
INSERT INTO "PesananDetail" VALUES (1,201,1,3),(2,201,2,2),(3,201,3,1),(4,202,2,1),(5,203,3,12),(6,203,4,6);
/*!40000 ALTER TABLE "PesananDetail" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "Supplier"
--

DROP TABLE IF EXISTS "Supplier";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Supplier" (
  "id" int(11) NOT NULL,
  "nama" varchar(100) DEFAULT NULL,
  "kontak_nama" varchar(100) DEFAULT NULL,
  "kota" varchar(100) DEFAULT NULL,
  "telp_no" varchar(20) DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Supplier"
--

LOCK TABLES "Supplier" WRITE;
/*!40000 ALTER TABLE "Supplier" DISABLE KEYS */;
INSERT INTO "Supplier" VALUES (1,'Indoguna','Pradana','Jakarta','021851234'),(2,'Megantara','Putra','Bogor','025134532'),(3,'Waskarya','Tira2','Bekasi','021867123');
/*!40000 ALTER TABLE "Supplier" ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 */ /*!50003 TRIGGER update_log_supplier 
    BEFORE UPDATE 
    ON Supplier
    FOR EACH ROW 
BEGIN
	INSERT INTO Log_Supplier
	(id, nama, kontak_nama, kota, telp_no, 
		nama_baru, kontak_nama_baru, kota_baru, telp_no_baru, waktu)
	VALUES
	(OLD.id, OLD.nama, OLD.kontak_nama, OLD.kota, OLD.telp_no, 
		NEW.nama, NEW.kontak_nama, NEW.kota, NEW.telp_no, NOW());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view "v_pegawai_jakarta"
--

DROP TABLE IF EXISTS "v_pegawai_jakarta";
/*!50001 DROP VIEW IF EXISTS "v_pegawai_jakarta"*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW "v_pegawai_jakarta" AS SELECT 
 1 AS "nrp",
 1 AS "nama",
 1 AS "tanggal_lahir",
 1 AS "jenis_kelamin",
 1 AS "tempat_tinggal"*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'mmb_arif'
--
/*!50003 DROP FUNCTION IF EXISTS "fn_pajak_ppn" */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  FUNCTION `fn_pajak_ppn`(a INT) RETURNS int(11)
begin
	declare hasil INT;
	set hasil = a * 11 / 100;
	return hasil;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS "pajak_ppn" */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  FUNCTION `pajak_ppn`(a INT) RETURNS int(11)
BEGIN
DECLARE result INT;
SET result = a * 11 / 100;
RETURN result;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS "sp_jumlah_pelanggan" */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_jumlah_pelanggan`()
BEGIN
      SELECT COUNT(id) as jumlah_pelanggan FROM Pelanggan;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view "v_pegawai_jakarta"
--

/*!50001 DROP VIEW IF EXISTS "v_pegawai_jakarta"*/;
/*!50001 CREATE VIEW "v_pegawai_jakarta" AS select "pegawai"."nrp" AS "nrp","pegawai"."nama" AS "nama","pegawai"."tanggal_lahir" AS "tanggal_lahir","pegawai"."jenis_kelamin" AS "jenis_kelamin","pegawai"."tempat_tinggal" AS "tempat_tinggal" from "pegawai" where ("pegawai"."tempat_tinggal" = 'Jakarta') */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-08  7:31:11
