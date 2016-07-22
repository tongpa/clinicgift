/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : clinic_gift_new

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-07-22 18:16:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for appointment
-- ----------------------------
DROP TABLE IF EXISTS `appointment`;
CREATE TABLE `appointment` (
  `id_appointment` int(11) NOT NULL AUTO_INCREMENT,
  `id_person` int(11) NOT NULL,
  `id_visit` int(11) NOT NULL,
  `appointment_date` datetime DEFAULT NULL,
  `appointment_time` datetime DEFAULT NULL,
  `id_clinic` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `id_cause` int(11) NOT NULL,
  `id_creator` int(11) NOT NULL,
  `description` text,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_appointment`),
  KEY `ix_appointment_id_creator` (`id_creator`),
  KEY `ix_appointment_id_doctor` (`id_doctor`),
  KEY `ix_appointment_id_person` (`id_person`),
  KEY `ix_appointment_id_clinic` (`id_clinic`),
  KEY `ix_appointment_id_cause` (`id_cause`),
  KEY `ix_appointment_id_visit` (`id_visit`),
  CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`id_person`) REFERENCES `person` (`id_person`),
  CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`id_visit`) REFERENCES `visit` (`id_visit`),
  CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`id_clinic`) REFERENCES `clinic` (`id_clinic`),
  CONSTRAINT `appointment_ibfk_4` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id_doctor`),
  CONSTRAINT `appointment_ibfk_5` FOREIGN KEY (`id_cause`) REFERENCES `cause` (`id_cause`),
  CONSTRAINT `appointment_ibfk_6` FOREIGN KEY (`id_creator`) REFERENCES `tg_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appointment
-- ----------------------------

-- ----------------------------
-- Table structure for bloodgroup
-- ----------------------------
DROP TABLE IF EXISTS `bloodgroup`;
CREATE TABLE `bloodgroup` (
  `id_bloodgroup` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_bloodgroup`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bloodgroup
-- ----------------------------
INSERT INTO `bloodgroup` VALUES ('1', 'A', '2016-07-20 01:13:43', null);
INSERT INTO `bloodgroup` VALUES ('2', 'B', '2016-07-20 01:14:08', null);
INSERT INTO `bloodgroup` VALUES ('3', 'O', '2016-07-20 01:14:18', null);
INSERT INTO `bloodgroup` VALUES ('4', 'AB', '2016-07-20 01:14:34', null);

-- ----------------------------
-- Table structure for cause
-- ----------------------------
DROP TABLE IF EXISTS `cause`;
CREATE TABLE `cause` (
  `id_cause` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cause`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cause
-- ----------------------------

-- ----------------------------
-- Table structure for clinic
-- ----------------------------
DROP TABLE IF EXISTS `clinic`;
CREATE TABLE `clinic` (
  `id_clinic` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_clinic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clinic
-- ----------------------------

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor` (
  `id_doctor` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES ('1', 'นพ.ปรมินท์ มินา', '2016-07-20 07:11:50', null);
INSERT INTO `doctor` VALUES ('2', 'นพ.ชลอวัฒน์  ดีแก้ว', '2016-07-20 07:12:05', null);
INSERT INTO `doctor` VALUES ('3', 'นพ.อนุสรณ์  สุยะ', '2016-07-20 07:12:28', null);
INSERT INTO `doctor` VALUES ('4', 'พญ. บงกช ใจมั่น', '2016-07-20 07:12:59', null);
INSERT INTO `doctor` VALUES ('5', 'พญ.หทัยรัตน์  สวนเอก', '2016-07-20 07:13:23', null);

-- ----------------------------
-- Table structure for gender
-- ----------------------------
DROP TABLE IF EXISTS `gender`;
CREATE TABLE `gender` (
  `id_gender` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_gender`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gender
-- ----------------------------
INSERT INTO `gender` VALUES ('1', 'ชาย', '2016-07-20 08:08:09', null);
INSERT INTO `gender` VALUES ('2', 'หญิง', '2016-07-20 08:08:14', null);

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id_item` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `genericname` varchar(255) DEFAULT NULL,
  `id_item_type` int(11) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_item`),
  KEY `ix_item_id_item_type` (`id_item_type`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`id_item_type`) REFERENCES `item_type` (`id_item_type`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('1', 'Paracetamon', 'Paracetamon', 'Paracetamon', '1', '0.20', 'เม็ด', '2016-07-22 18:00:40', null);
INSERT INTO `item` VALUES ('2', 'Amoxy', 'Amoxy', 'Amoxy', '1', '0.40', 'เม็ด', '2016-07-22 18:00:40', null);
INSERT INTO `item` VALUES ('3', 'ปรึกษา', 'ปรึกษา', 'ปรึกษา', '2', '500.00', null, '2016-07-22 18:00:40', null);
INSERT INTO `item` VALUES ('4', 'ค่าฉีดยา', 'ค่าฉีดยา', 'ค่าฉีดยา', '2', '50.00', null, '2016-07-22 18:00:40', null);
INSERT INTO `item` VALUES ('5', 'เข็มฉีดยาเบอร์ 1', 'เข็มฉีดยาเบอร์ 1', 'เข็มฉีดยาเบอร์ 1', '3', '10.00', null, '2016-07-22 18:00:40', null);
INSERT INTO `item` VALUES ('6', 'เข็มฉีดยาเบอร์ 2', 'เข็มฉีดยาเบอร์ 2', 'เข็มฉีดยาเบอร์ 2', '3', '12.00', null, '2016-07-22 18:00:40', null);

-- ----------------------------
-- Table structure for item_type
-- ----------------------------
DROP TABLE IF EXISTS `item_type`;
CREATE TABLE `item_type` (
  `id_item_type` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_item_type`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_type
-- ----------------------------
INSERT INTO `item_type` VALUES ('1', 'ยา', '2016-07-22 17:56:40', null);
INSERT INTO `item_type` VALUES ('2', 'บริการ', '2016-07-22 17:56:40', null);
INSERT INTO `item_type` VALUES ('3', 'เวชภัณฑ์', '2016-07-22 17:56:40', null);
INSERT INTO `item_type` VALUES ('4', 'LAB', '2016-07-22 17:56:40', null);
INSERT INTO `item_type` VALUES ('5', 'X-Ray', '2016-07-22 17:56:40', null);

-- ----------------------------
-- Table structure for map_doctor_clinic
-- ----------------------------
DROP TABLE IF EXISTS `map_doctor_clinic`;
CREATE TABLE `map_doctor_clinic` (
  `id_doctor_clinic` int(11) NOT NULL AUTO_INCREMENT,
  `id_clinic` int(11) NOT NULL,
  `id_doctor` int(11) NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor_clinic`),
  UNIQUE KEY `id_clinic` (`id_clinic`),
  UNIQUE KEY `id_doctor` (`id_doctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of map_doctor_clinic
-- ----------------------------

-- ----------------------------
-- Table structure for map_user_doctor
-- ----------------------------
DROP TABLE IF EXISTS `map_user_doctor`;
CREATE TABLE `map_user_doctor` (
  `id_doctor` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_doctor`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of map_user_doctor
-- ----------------------------

-- ----------------------------
-- Table structure for marriage
-- ----------------------------
DROP TABLE IF EXISTS `marriage`;
CREATE TABLE `marriage` (
  `id_marriage` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_marriage`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of marriage
-- ----------------------------
INSERT INTO `marriage` VALUES ('1', 'โสด', '2016-07-20 01:17:21', null);
INSERT INTO `marriage` VALUES ('2', 'คู่', '2016-07-20 01:17:31', null);
INSERT INTO `marriage` VALUES ('3', 'หม้าย', '2016-07-20 01:17:56', null);
INSERT INTO `marriage` VALUES ('4', 'หย่า', '2016-07-20 01:18:20', null);
INSERT INTO `marriage` VALUES ('5', 'ร้าง', '2016-07-20 01:18:28', null);
INSERT INTO `marriage` VALUES ('6', 'สมณะ', '2016-07-20 01:18:43', null);

-- ----------------------------
-- Table structure for migrate_version
-- ----------------------------
DROP TABLE IF EXISTS `migrate_version`;
CREATE TABLE `migrate_version` (
  `version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of migrate_version
-- ----------------------------

-- ----------------------------
-- Table structure for nation
-- ----------------------------
DROP TABLE IF EXISTS `nation`;
CREATE TABLE `nation` (
  `id_nation` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_nation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nation
-- ----------------------------

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id_person` int(11) NOT NULL AUTO_INCREMENT,
  `id_prefix` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `id_gender` int(11) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `id_marriage` int(11) DEFAULT NULL,
  `id_nation` int(11) DEFAULT NULL,
  `id_race` int(11) DEFAULT NULL,
  `id_religion` int(11) DEFAULT NULL,
  `id_bloodgroup` int(11) DEFAULT NULL,
  `bloodrh` varchar(255) DEFAULT NULL,
  `drugalert` varchar(255) DEFAULT NULL,
  `pid` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_person`),
  KEY `ix_person_id_prefix` (`id_prefix`),
  KEY `ix_person_id_bloodgroup` (`id_bloodgroup`),
  KEY `ix_person_id_nation` (`id_nation`),
  KEY `ix_person_id_marriage` (`id_marriage`),
  KEY `ix_person_id_race` (`id_race`),
  KEY `ix_person_id_religion` (`id_religion`),
  KEY `ix_person_id_gender` (`id_gender`),
  CONSTRAINT `person_ibfk_1` FOREIGN KEY (`id_prefix`) REFERENCES `prefix` (`id_prefix`),
  CONSTRAINT `person_ibfk_2` FOREIGN KEY (`id_gender`) REFERENCES `gender` (`id_gender`),
  CONSTRAINT `person_ibfk_3` FOREIGN KEY (`id_marriage`) REFERENCES `marriage` (`id_marriage`),
  CONSTRAINT `person_ibfk_4` FOREIGN KEY (`id_nation`) REFERENCES `nation` (`id_nation`),
  CONSTRAINT `person_ibfk_5` FOREIGN KEY (`id_race`) REFERENCES `nation` (`id_nation`),
  CONSTRAINT `person_ibfk_6` FOREIGN KEY (`id_religion`) REFERENCES `religion` (`id_religion`),
  CONSTRAINT `person_ibfk_7` FOREIGN KEY (`id_bloodgroup`) REFERENCES `bloodgroup` (`id_bloodgroup`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('2', '2', 'ผดุงรัฐ', 'มากชู', 'โต้ง', '1', '0000-00-00 00:00:00', '2', null, null, '2', '3', '-', '-', '12345678912345', 'tong_pa@hotmail.com', '2016-07-20 05:41:02', '2016-07-20 07:00:13');

-- ----------------------------
-- Table structure for prefix
-- ----------------------------
DROP TABLE IF EXISTS `prefix`;
CREATE TABLE `prefix` (
  `id_prefix` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_prefix`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prefix
-- ----------------------------
INSERT INTO `prefix` VALUES ('1', 'ไม่ระบุ', '2016-07-20 01:41:06', '2016-07-20 01:41:22');
INSERT INTO `prefix` VALUES ('2', 'นาย', '2016-07-20 01:41:31', null);
INSERT INTO `prefix` VALUES ('3', 'นางสาว', '2016-07-20 01:41:43', null);
INSERT INTO `prefix` VALUES ('4', 'นาง', '2016-07-20 01:41:56', null);

-- ----------------------------
-- Table structure for religion
-- ----------------------------
DROP TABLE IF EXISTS `religion`;
CREATE TABLE `religion` (
  `id_religion` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_religion`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of religion
-- ----------------------------
INSERT INTO `religion` VALUES ('1', 'ไม่ระบุศาสนา', '2016-07-20 01:22:30', null);
INSERT INTO `religion` VALUES ('2', 'พุทธ', '2016-07-20 01:22:43', null);
INSERT INTO `religion` VALUES ('3', 'คริสต์', '2016-07-20 01:22:59', null);
INSERT INTO `religion` VALUES ('4', 'อิสลาม', '2016-07-20 01:23:12', null);
INSERT INTO `religion` VALUES ('5', 'ฮินดู', '2016-07-20 01:23:25', null);

-- ----------------------------
-- Table structure for service_point
-- ----------------------------
DROP TABLE IF EXISTS `service_point`;
CREATE TABLE `service_point` (
  `id_service_point` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_service_point`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of service_point
-- ----------------------------
INSERT INTO `service_point` VALUES ('1', 'เวชระเบียน', '2016-07-20 01:39:20', null);
INSERT INTO `service_point` VALUES ('2', 'คัดกรอง', '2016-07-20 01:39:34', null);
INSERT INTO `service_point` VALUES ('3', 'ห้องตรวจ', '2016-07-20 01:39:51', null);
INSERT INTO `service_point` VALUES ('4', 'เภสัช', '2016-07-20 01:40:07', null);
INSERT INTO `service_point` VALUES ('5', 'การเงิน', '2016-07-20 01:40:23', null);

-- ----------------------------
-- Table structure for tg_group
-- ----------------------------
DROP TABLE IF EXISTS `tg_group`;
CREATE TABLE `tg_group` (
  `group_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(16) NOT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group_name` (`group_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tg_group
-- ----------------------------
INSERT INTO `tg_group` VALUES ('1', 'managers', 'Managers Group', '2016-07-20 08:05:51');

-- ----------------------------
-- Table structure for tg_group_permission
-- ----------------------------
DROP TABLE IF EXISTS `tg_group_permission`;
CREATE TABLE `tg_group_permission` (
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`group_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `tg_group_permission_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `tg_group` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tg_group_permission_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `tg_permission` (`permission_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tg_group_permission
-- ----------------------------
INSERT INTO `tg_group_permission` VALUES ('1', '1');

-- ----------------------------
-- Table structure for tg_permission
-- ----------------------------
DROP TABLE IF EXISTS `tg_permission`;
CREATE TABLE `tg_permission` (
  `permission_id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_name` varchar(63) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`permission_id`),
  UNIQUE KEY `permission_name` (`permission_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tg_permission
-- ----------------------------
INSERT INTO `tg_permission` VALUES ('1', 'manage', 'This permission gives an administrative right');

-- ----------------------------
-- Table structure for tg_user
-- ----------------------------
DROP TABLE IF EXISTS `tg_user`;
CREATE TABLE `tg_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(16) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`),
  UNIQUE KEY `email_address` (`email_address`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tg_user
-- ----------------------------
INSERT INTO `tg_user` VALUES ('1', 'manager', 'manager@somedomain.com', 'Example manager', 'e97757360512af735a0ade0c9b86ba6a2523c5e7efb13e0bfe73207b851ec00d96c739cf8d901aa4bd599bb4623cb67be40700d3831f3bce885b4378b55a4092', '2016-07-20 08:05:51');
INSERT INTO `tg_user` VALUES ('2', 'editor', 'editor@somedomain.com', 'Example editor', 'c115972e441bf8d978ff4658d51935e6690c51311dafb6aeca5ee5aa1fa61f0977c07330bda084efcb149e212309f2cdcdb3906c08b6f8f7e2389beddba7981e', '2016-07-20 08:05:51');

-- ----------------------------
-- Table structure for tg_user_group
-- ----------------------------
DROP TABLE IF EXISTS `tg_user_group`;
CREATE TABLE `tg_user_group` (
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `tg_user_group_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tg_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tg_user_group_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `tg_group` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tg_user_group
-- ----------------------------
INSERT INTO `tg_user_group` VALUES ('1', '1');

-- ----------------------------
-- Table structure for visit
-- ----------------------------
DROP TABLE IF EXISTS `visit`;
CREATE TABLE `visit` (
  `id_visit` int(11) NOT NULL AUTO_INCREMENT,
  `vn` varchar(255) DEFAULT NULL,
  `hn` varchar(255) DEFAULT NULL,
  `id_person` int(11) NOT NULL,
  `visit_date` datetime DEFAULT NULL,
  `visit_time` datetime DEFAULT NULL,
  `dx` varchar(255) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_visit`),
  KEY `ix_visit_id_person` (`id_person`),
  CONSTRAINT `visit_ibfk_1` FOREIGN KEY (`id_person`) REFERENCES `person` (`id_person`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visit
-- ----------------------------
INSERT INTO `visit` VALUES ('3', null, null, '2', null, null, '', '2016-07-20 08:33:33', null);
INSERT INTO `visit` VALUES ('4', null, null, '2', null, null, '', '2016-07-20 08:34:39', null);
INSERT INTO `visit` VALUES ('5', null, null, '2', null, null, '', '2016-07-20 08:36:30', null);
INSERT INTO `visit` VALUES ('6', null, null, '2', null, null, '', '2016-07-20 08:38:14', null);
INSERT INTO `visit` VALUES ('7', null, null, '2', null, null, '', '2016-07-21 04:56:39', null);
INSERT INTO `visit` VALUES ('8', null, null, '2', null, null, '', '2016-07-21 12:28:24', null);
INSERT INTO `visit` VALUES ('9', null, null, '2', null, null, '', '2016-07-21 12:30:06', null);
INSERT INTO `visit` VALUES ('10', null, null, '2', null, null, '', '2016-07-22 01:47:12', null);

-- ----------------------------
-- Table structure for visit_billing
-- ----------------------------
DROP TABLE IF EXISTS `visit_billing`;
CREATE TABLE `visit_billing` (
  `id_billing` int(11) NOT NULL AUTO_INCREMENT,
  `id_visit` int(11) NOT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `id_staff` int(11) NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_billing`),
  KEY `ix_visit_billing_id_staff` (`id_staff`),
  KEY `ix_visit_billing_id_visit` (`id_visit`),
  CONSTRAINT `visit_billing_ibfk_1` FOREIGN KEY (`id_visit`) REFERENCES `visit` (`id_visit`),
  CONSTRAINT `visit_billing_ibfk_2` FOREIGN KEY (`id_staff`) REFERENCES `tg_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visit_billing
-- ----------------------------

-- ----------------------------
-- Table structure for visit_order
-- ----------------------------
DROP TABLE IF EXISTS `visit_order`;
CREATE TABLE `visit_order` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_visit` int(11) NOT NULL,
  `id_item` int(11) NOT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `id_staff` int(11) NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  KEY `ix_visit_order_id_staff` (`id_staff`),
  KEY `ix_visit_order_id_visit` (`id_visit`),
  KEY `ix_visit_order_id_item` (`id_item`),
  CONSTRAINT `visit_order_ibfk_1` FOREIGN KEY (`id_visit`) REFERENCES `visit` (`id_visit`),
  CONSTRAINT `visit_order_ibfk_2` FOREIGN KEY (`id_item`) REFERENCES `item` (`id_item`),
  CONSTRAINT `visit_order_ibfk_3` FOREIGN KEY (`id_staff`) REFERENCES `tg_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visit_order
-- ----------------------------

-- ----------------------------
-- Table structure for visit_service
-- ----------------------------
DROP TABLE IF EXISTS `visit_service`;
CREATE TABLE `visit_service` (
  `id_service` int(11) NOT NULL AUTO_INCREMENT,
  `id_clinic` int(11) DEFAULT NULL,
  `id_service_point` int(11) DEFAULT NULL,
  `id_doctor` int(11) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `service_date` datetime DEFAULT NULL,
  `finish_date` datetime DEFAULT NULL,
  `id_visit` int(11) DEFAULT NULL,
  `id_person` int(11) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_service`),
  KEY `ix_visit_service_id_clinic` (`id_clinic`),
  KEY `ix_visit_service_id_doctor` (`id_doctor`),
  KEY `id_service_point` (`id_service_point`),
  KEY `id_visit` (`id_visit`),
  KEY `id_person` (`id_person`),
  CONSTRAINT `visit_service_ibfk_1` FOREIGN KEY (`id_clinic`) REFERENCES `clinic` (`id_clinic`),
  CONSTRAINT `visit_service_ibfk_2` FOREIGN KEY (`id_doctor`) REFERENCES `doctor` (`id_doctor`),
  CONSTRAINT `visit_service_ibfk_3` FOREIGN KEY (`id_service_point`) REFERENCES `service_point` (`id_service_point`),
  CONSTRAINT `visit_service_ibfk_4` FOREIGN KEY (`id_visit`) REFERENCES `visit` (`id_visit`),
  CONSTRAINT `visit_service_ibfk_5` FOREIGN KEY (`id_person`) REFERENCES `person` (`id_person`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visit_service
-- ----------------------------
INSERT INTO `visit_service` VALUES ('2', null, '2', '1', '2016-07-20 15:27:09', null, null, '3', '2', '2016-07-20 08:33:33', null);
INSERT INTO `visit_service` VALUES ('3', null, '2', '1', '2016-07-20 15:27:09', null, null, '4', '2', '2016-07-20 08:34:39', null);
INSERT INTO `visit_service` VALUES ('4', null, '2', '1', '2016-07-20 15:27:09', null, null, '5', '2', '2016-07-20 08:36:30', null);
INSERT INTO `visit_service` VALUES ('5', null, '2', '1', '2016-07-20 15:27:09', null, null, '6', '2', '2016-07-20 08:38:14', null);
INSERT INTO `visit_service` VALUES ('6', null, '2', '1', '2016-07-21 09:40:19', null, null, '7', '2', '2016-07-21 04:56:39', null);
INSERT INTO `visit_service` VALUES ('7', null, '2', '1', '2016-07-21 19:27:25', null, null, '8', '2', '2016-07-21 12:28:24', null);
INSERT INTO `visit_service` VALUES ('8', null, '2', '1', '2016-07-21 19:29:46', null, null, '9', '2', '2016-07-21 12:30:06', null);
INSERT INTO `visit_service` VALUES ('9', null, '2', '1', '2016-07-22 19:29:46', null, null, '10', '2', '2016-07-22 01:47:12', null);
INSERT INTO `visit_service` VALUES ('10', null, '3', '1', '2016-07-22 16:06:30', null, null, '10', '2', '2016-07-22 09:51:33', null);

-- ----------------------------
-- Table structure for visit_vitalsign
-- ----------------------------
DROP TABLE IF EXISTS `visit_vitalsign`;
CREATE TABLE `visit_vitalsign` (
  `id_vitalsign` int(11) NOT NULL AUTO_INCREMENT,
  `id_visit` int(11) NOT NULL,
  `weight` varchar(10) DEFAULT NULL,
  `temperature` varchar(10) DEFAULT NULL,
  `pulse` varchar(10) DEFAULT NULL,
  `pressure` varchar(10) DEFAULT NULL,
  `height` varchar(10) DEFAULT NULL,
  `bmi` varchar(10) DEFAULT NULL,
  `cc` text,
  `pmh` text,
  `fh` text,
  `hpi` text,
  `pe` text,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_vitalsign`),
  KEY `ix_visit_vitalsign_id_visit` (`id_visit`),
  CONSTRAINT `visit_vitalsign_ibfk_1` FOREIGN KEY (`id_visit`) REFERENCES `visit` (`id_visit`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of visit_vitalsign
-- ----------------------------
INSERT INTO `visit_vitalsign` VALUES ('1', '3', '55', '55', '55', '55', '55', '55', '888', '777', '888', '999', '777', '2016-07-20 10:30:16', '2016-07-20 10:55:23');
INSERT INTO `visit_vitalsign` VALUES ('2', '4', '55', '55', '55', '55', '55', '55', '111', '222', '333', '444', '555', '2016-07-20 11:08:07', null);
INSERT INTO `visit_vitalsign` VALUES ('3', '5', '75', '45', '12', '12', '12', '12', '88', '77', '66', '88', '66', '2016-07-20 11:10:40', null);
INSERT INTO `visit_vitalsign` VALUES ('4', '5', '55', '44', '55', '66', '44', '55', '11', '22', '3', '44', '55', '2016-07-20 11:12:47', null);
INSERT INTO `visit_vitalsign` VALUES ('5', '5', '88', '55', '88', '44', '55', '66', '11', '22', '3', '44', '55', '2016-07-20 11:14:50', null);
INSERT INTO `visit_vitalsign` VALUES ('6', '5', '11', '22', '55', '44', '55', '88', '888', '444', '888', '777', '888', '2016-07-20 11:15:09', null);
INSERT INTO `visit_vitalsign` VALUES ('7', '8', '55', '55', '55', '55', '55', '55', '88', '88', '88', '88', '88', '2016-07-21 12:30:50', '2016-07-21 12:30:55');
INSERT INTO `visit_vitalsign` VALUES ('8', '10', '222', '333', '444', '555', '66', '77', '55', '56', '56', '56', '45', '2016-07-22 09:11:29', null);
