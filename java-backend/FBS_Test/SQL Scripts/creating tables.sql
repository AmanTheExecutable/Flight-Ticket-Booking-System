DROP SCHEMA IF EXISTS `flight-booking-system`;

CREATE SCHEMA `flight-booking-system`;

use `flight-booking-system`;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE `user_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE `ADMIN_DETAILS`(
`email` varchar(50) DEFAULT NULL,
`password` varchar(50) DEFAULT NULL
);

CREATE TABLE Flight_Details (
    flight_id INT AUTO_INCREMENT PRIMARY KEY,
    flight_name VARCHAR(100),
    model VARCHAR(50),
    economy_seats INT,
    first_class_seats INT,
    business_class_seats INT
);

CREATE TABLE Flight_Schedule (
    flight_id INT,
    source_location VARCHAR(100),
    destination_location VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    economy_price DECIMAL(10, 2),
    first_class_price DECIMAL(10, 2),
    business_class_price DECIMAL(10, 2),
    FOREIGN KEY (flight_id) REFERENCES Flight_Details(flight_id)
);

-- CREATE TABLE `instructor` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `first_name` varchar(45) DEFAULT NULL,
--   `last_name` varchar(45) DEFAULT NULL,
--   `email` varchar(45) DEFAULT NULL,
--   `instructor_detail_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `FK_DETAIL_idx` (`instructor_detail_id`),
--   CONSTRAINT `FK_DETAIL` FOREIGN KEY (`instructor_detail_id`) REFERENCES `instructor_detail` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- SET FOREIGN_KEY_CHECKS = 1;
